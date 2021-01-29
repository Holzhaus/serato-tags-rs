use std::env;
use std::fs::read_dir;
use std::fs::File;
use std::io::Write;
use std::path::Path;

fn main() {
    let out_dir = env::var("OUT_DIR").unwrap();
    println!("Writing tests to: {:?}", out_dir);
    let destination = Path::new(&out_dir).join("tests.rs");
    let mut test_file = File::create(&destination).unwrap();

    // write test file header, put `use`, `const` etc there
    write_header(&mut test_file);

    let test_data_directories = read_dir("./tests/data/tags").unwrap();
    for entry in test_data_directories {
        let directory = entry.unwrap().path().canonicalize().unwrap();
        if !directory.is_dir() {
            continue;
        }

        let tag_name = directory.file_name().unwrap();
        let tag_name = tag_name.to_str().expect("Failed to get tag name");

        for entry in directory.read_dir().unwrap() {
            let filepath = entry.unwrap().path();
            if let Some(ext) = filepath.extension() {
                if ext != "bin" {
                    return;
                }
            }

            write_test(&mut test_file, filepath.as_path(), tag_name);
        }
    }
}

fn write_test(test_file: &mut File, filepath: &Path, tag_name: &str) {
    let stem = filepath.file_stem().unwrap().to_str().unwrap();
    let stem_split: Vec<&str> = stem.rsplitn(2, '.').collect();
    let tag_type: &str = stem_split[0];
    let filename: &str = stem_split[1];

    let test_name = format!("serato_{}_{}_{}", tag_name, filename, tag_type);

    let parser = match tag_name {
        "analysis" => "Analysis",
        "autotags" => "Autotags",
        "beatgrid" => "Beatgrid",
        "markers" => "Markers",
        "markers2" => "Markers2",
        "overview" => "Overview",
        "vidassoc" => "VidAssoc",
        "relvolad" => "RelVolAd",
        _ => {
            panic!("Unknown tag name!")
        }
    };

    write!(
        test_file,
        include_str!("./tests/test_parse.rs.in"),
        name = test_name,
        filepath = filepath.to_str().unwrap(),
        parser = parser,
        tag_type = tag_type,
    )
    .unwrap();
}

fn write_header(test_file: &mut File) {
    write!(
        test_file,
        r#"// THIS FILE IS AUTOGENERATED - DO NOT EDIT!
use serato_tags::tag::format::id3::ID3Tag;
use serato_tags::tag::format::flac::FLACTag;
use serato_tags::tag::format::mp4::MP4Tag;
"#
    )
    .unwrap();
}
