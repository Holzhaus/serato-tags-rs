var searchIndex = JSON.parse('{\
"serato_tags":{"doc":"","i":[[0,"analysis","serato_tags","",null,null],[3,"Analysis","serato_tags::analysis","",null,null],[12,"version","","",0,null],[5,"parse","","",null,[[],[["analysis",3],["err",4],["result",4]]]],[0,"autotags","serato_tags","",null,null],[3,"Autotags","serato_tags::autotags","",null,null],[12,"version","","",1,null],[12,"bpm","","",1,null],[12,"auto_gain","","",1,null],[12,"gain_db","","",1,null],[5,"double_str","","",null,[[],["iresult",6]]],[5,"parse","","",null,[[],[["err",4],["result",4],["autotags",3]]]],[0,"beatgrid","serato_tags","",null,null],[3,"TerminalMarker","serato_tags::beatgrid","",null,null],[12,"position","","",2,null],[12,"bpm","","",2,null],[3,"NonTerminalMarker","","",null,null],[12,"position","","",3,null],[12,"beats_till_next_marker","","",3,null],[3,"Beatgrid","","",null,null],[12,"version","","",4,null],[12,"non_terminal_markers","","",4,null],[12,"terminal_marker","","",4,null],[12,"footer","","",4,null],[4,"BeatgridMarker","","",null,null],[13,"Terminal","","",5,null],[13,"NonTerminal","","",5,null],[5,"non_terminal_marker","","",null,[[],[["nonterminalmarker",3],["iresult",6]]]],[5,"terminal_marker","","",null,[[],[["terminalmarker",3],["iresult",6]]]],[5,"parse","","",null,[[],[["err",4],["result",4],["beatgrid",3]]]],[0,"markers","serato_tags","",null,null],[3,"Color","serato_tags::markers","",null,null],[12,"red","","",6,null],[12,"green","","",6,null],[12,"blue","","",6,null],[3,"Marker","","",null,null],[12,"start_position_millis","","",7,null],[12,"end_position_millis","","",7,null],[12,"color","","",7,null],[12,"entry_type","","",7,null],[12,"locked","","",7,null],[3,"Markers","","",null,null],[12,"version","","",8,null],[12,"entries","","",8,null],[12,"track_color","","",8,null],[4,"EntryType","","",null,null],[13,"INVALID","","",9,null],[13,"CUE","","",9,null],[13,"LOOP","","",9,null],[5,"take_bool","","",null,[[],["iresult",6]]],[5,"has_position","","",null,[[],["iresult",6]]],[5,"position","","",null,[[],[["iresult",6],["option",4]]]],[5,"entry_type","","",null,[[],[["entrytype",4],["iresult",6]]]],[5,"serato32_color","","",null,[[],[["iresult",6],["color",3]]]],[5,"marker","","",null,[[],[["marker",3],["iresult",6]]]],[5,"parse","","",null,[[],[["markers",3],["result",4],["err",4]]]],[0,"markers2","serato_tags","",null,null],[3,"UnknownMarker","serato_tags::markers2","",null,null],[12,"name","","",10,null],[12,"data","","",10,null],[3,"Markers2","","",null,null],[12,"version","","",11,null],[12,"size","","",11,null],[12,"content","","",11,null],[3,"Markers2Content","","",null,null],[12,"version","","",12,null],[12,"markers","","",12,null],[4,"Marker","","",null,null],[13,"Unknown","","",13,null],[5,"take_base64_chunk","","",null,[[],["iresult",6]]],[5,"take_base64_chunks","","",null,[[],[["iresult",6],["vec",3]]]],[5,"decode_base64_chunks","","",null,[[["vec",3]],[["vec",3],["result",4],["err",4]]]],[5,"parse_utf8","","",null,[[],[["string",3],["iresult",6]]]],[5,"take_utf8","","",null,[[],[["string",3],["iresult",6]]]],[5,"take_marker","","",null,[[],[["iresult",6],["marker",4]]]],[5,"parse_markers2_content","","",null,[[],[["markers2content",3],["iresult",6]]]],[5,"parse","","",null,[[],[["result",4],["markers2",3],["err",4]]]],[0,"util","serato_tags","",null,null],[3,"Version","serato_tags::util","",null,null],[12,"major","","",14,null],[12,"minor","","",14,null],[5,"version_info","","",null,[[],[["version",3],["iresult",6]]]],[5,"take_until_nullbyte","","",null,[[],["iresult",6]]],[5,"serato32_decode","","These functions convert between a custom 4-byte format…",null,[[],["iresult",6]]],[11,"from","serato_tags::analysis","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","serato_tags::autotags","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","serato_tags::beatgrid","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","serato_tags::markers","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","serato_tags::markers2","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","serato_tags::util","",14,[[]]],[11,"into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"fmt","serato_tags::analysis","",0,[[["formatter",3]],["result",6]]],[11,"fmt","serato_tags::autotags","",1,[[["formatter",3]],["result",6]]],[11,"fmt","serato_tags::beatgrid","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","serato_tags::markers","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","serato_tags::markers2","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","serato_tags::util","",14,[[["formatter",3]],["result",6]]]],"p":[[3,"Analysis"],[3,"Autotags"],[3,"TerminalMarker"],[3,"NonTerminalMarker"],[3,"Beatgrid"],[4,"BeatgridMarker"],[3,"Color"],[3,"Marker"],[3,"Markers"],[4,"EntryType"],[3,"UnknownMarker"],[3,"Markers2"],[3,"Markers2Content"],[4,"Marker"],[3,"Version"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);