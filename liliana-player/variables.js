var liliana_lyric = getByClass("liliana-lyric");
var div_result = getById("div_result");
var lyric_playground = getById("lyric_playground");
var audio_wrapper = getById("audio_wrapper");
var song_details = getById("song_details");
var btn_toggle_setting = getByClass("btn_toggle_setting");
var btn_sync_wrapper = getByClass("btn_sync_wrapper");
var hide_when_fullscreen = getById("hide_when_fullscreen");
var div_background = getById("div_background");
var lilianaLyric = getByClass("liliana-lyric");
var btn_fullscreen = getByClass("btn_fullscreen");
var setting_bottom = getByClass("setting_bottom");
var left_img = getByClass("left_img");
var left_title = getByClass("left_title");
var left_artist = getByClass("left_artist");
var left_album = getByClass("left_album");
var select_mp3_label = getByClass("select_mp3_label");
var select_mp3_wrapper = getByClass("select_mp3_wrapper");
var btn_sync_up = document.getElementsByClassName("btn_sync_up")[0];
var btn_sync_down = document.getElementsByClassName("btn_sync_down")[0];
var words = [];
var startTimes = [];
var endTimes = [];
var myAudio;
var title, artist, album;
var lyricFile;
var currErrWord = -1;
var cntWord, currWordID;
var playLyricInterval, countdownInterval, currCountdownWord;
var offsetTime = 0; // offset time in milisecond
var bulletArr = ["", "•", "••", "•••", "••••", "•••••"];
var playList = [];
var playType;
var activeAudio;
var btnNext, btnPrev, btnPlayType;
var songTable;
var isLrc;
var playedList = [];

const LILIANA_SETTINGS = "LILIANA_SETTINGS";
const SEQUENCE = "SEQUENCE";
const SHUFFLE = "SHUFFLE";
const REPEAT_ONE = "REPEAT_ONE";
const playTypeList = [SEQUENCE, SHUFFLE, REPEAT_ONE];
const playTypeCssList = ["fa-long-arrow-right", "fa-random", "fa-repeat"];
const playTypeTitleList = ["Sequence", "Shuffle", "Repeat one"];
const playTypeSvgList = [BTN_SEQUENCE_SVG, BTN_SHUFFLE_SVG, BTN_REPEAT_ONE_SVG];
const NO_LYRIC = `Sorry! This song has no lyric yet! You can contribute lyric by
  sending it to me:<br/><a href='mailto:taanhtu95@gmail.com'>Mail</a><br/>
  <a href='https://fb.com/anhtuta95' target='_blank'>FB</a>`;
