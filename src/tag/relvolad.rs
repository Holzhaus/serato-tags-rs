//! The `Serato RelVolAd` tag stores the analysis version.

use super::format::enveloped;
use super::format::flac;
use super::format::mp4;
use crate::error::Error;
use crate::util;
use crate::util::Res;

/// Represents the  `Serato RelVolAd` tag.
///
/// **Note:** This tag has not been reverse-engineered yet. Judging from the name it contains
/// information about relative volume adjustments, but at this point that is just speculation.
///
/// # Example
///
/// ```
/// use serato_tags::tag::{RelVolAd, format::flac::FLACTag};
///
/// // First, read the tag data from the FLAC VORBIS_COMMENT (the tag name can be accessed using the
/// // RelVolAd::FLAC_TAG), then parse the data like this:
/// fn parse(data: &[u8]) {
///     let content = RelVolAd::parse_flac(data).expect("Failed to parse data!");
///     println!("{:?}", content);
/// }
/// ```
#[derive(Debug)]
pub struct RelVolAd {
    /// The `RelVolAd` version.
    pub version: util::Version,
}

impl util::Tag for RelVolAd {
    const NAME: &'static str = "Serato RelVolAd";

    fn parse(input: &[u8]) -> Result<Self, Error> {
        let (_, overview) = nom::combinator::all_consuming(take_relvolad)(input)?;
        Ok(overview)
    }
}

impl enveloped::EnvelopedTag for RelVolAd {}
impl flac::FLACTag for RelVolAd {
    const FLAC_COMMENT: &'static str = "SERATO_RELVOL";
}
impl mp4::MP4Tag for RelVolAd {
    const MP4_ATOM: &'static str = "----:com.serato.dj:relvol";
}

fn take_relvolad(input: &[u8]) -> Res<&[u8], RelVolAd> {
    let (input, version) = util::take_version(input)?;
    let (input, _) =
        nom::error::context("unknown bytes", nom::bytes::complete::tag(b"\x01\x00\x00"))(input)?;

    let relvolad = RelVolAd { version };
    Ok((input, relvolad))
}