// Polygol Messages Language Dictionary
window.bcpMap = { EN: 'en-US', JP: 'ja-JP', KO: 'ko-KR', ZH: 'zh-CN' };
var bcpMap = window.bcpMap;

function getAppLanguage() {
    let l = (localStorage.getItem('language') || localStorage.getItem('selectedLanguage') || 'EN').toUpperCase();
    if (l === 'JA') l = 'JP';
    return ['EN', 'JP', 'KO', 'ZH'].includes(l) ? l : 'EN';
}
window.getAppLanguage = getAppLanguage;
var getAppLanguage = window.getAppLanguage;

function t(key, params = {}) {
    const lang = getAppLanguage();
    const dict = window['LANG_' + lang + '_MESSAGES'] || window['LANG_EN_MESSAGES'] || {};
    let str = dict[key] !== undefined ? dict[key] : key;
    if (params) {
        Object.keys(params).forEach(p => {
            str = str.replace(new RegExp('\\{' + p + '\\}', 'g'), params[p]);
        });
    }
    return str;
}
window.t = t;
var t = window.t;

window.LANG_EN_MESSAGES = {

    TITLE: "Messages",
    APP_HEADING: "Polygol Messages",
    ADD_PICTURE: "Add a picture",
    SETUP_NAME_PLACEHOLDER: "Name",
    GET_STARTED: "Get Started",
    HOME: "Home",
    CHAT: "Chat",
    YOU: "You",
    START_CONVERSATION: "Start a conversation",
    JOIN_CODE_PLACEHOLDER: "Enter code or chat name",
    SELECT_CHAT: "Select a chat",
    CODE_LABEL: "Code: {code}",
    TYPING: "Typing...",
    REPLYING: "Replying",
    TYPE_MESSAGE_PLACEHOLDER: "Type a message",
    DISPLAY_NAME_PLACEHOLDER: "Your Display Name",
    SAVE: "Save",
    UNIQUE_ID: "Your unique ID: {id}",
    ENTER_NAME_PROMPT: "Enter a name",
    CHOOSE_PFP_PROMPT: "Choose a profile picture",
    POLL_QUESTION_PROMPT: "Poll question:",
    POLL_TITLE: "Poll",
    OPTIONS_PROMPT: "Options (comma-separated):",
    OPTIONS_TITLE: "Options",
    ORIGINAL_MSG_NOT_FOUND: "Original message not found in history",
    REACT_PROMPT: "Enter something to react with:",
    REACT_TITLE: "React to Message",
    LEAVE_CHAT_CONFIRM: "Leave and delete chat \"{name}\"?",
    PROFILE_UPDATED: "Profile updated",
    CHAT_NAME_PROMPT: "What do you want to call this chat?",
    JOINING_CHAT_TITLE: "Joining chat",
    CHAT_PASSWORD_PROMPT: "Enter chat password (if any):",
    SET_PASSWORD_PROMPT: "Set a password for this group (optional):",
    CREATED_CHAT_ALERT: "Created chat {chatId}",
    PASSWORD_TITLE: "Password",
    GROUP_PASSWORD_TITLE: "Group Password",
    REPLYING_TO: "Replying to",
};

window.LANG_JP_MESSAGES = {

    TITLE: "メッセージ",
    APP_HEADING: "Polygolメッセージ",
    ADD_PICTURE: "写真を追加",
    SETUP_NAME_PLACEHOLDER: "名前",
    GET_STARTED: "はじめる",
    HOME: "ホーム",
    CHAT: "チャット",
    YOU: "マイページ",
    START_CONVERSATION: "会話を始めましょう",
    JOIN_CODE_PLACEHOLDER: "コードまたはチャット名を入力",
    SELECT_CHAT: "チャットを選択",
    CODE_LABEL: "コード: {code}",
    TYPING: "入力中...",
    REPLYING: "返信中",
    TYPE_MESSAGE_PLACEHOLDER: "メッセージを入力",
    DISPLAY_NAME_PLACEHOLDER: "表示名",
    SAVE: "保存",
    UNIQUE_ID: "一意のID: {id}",
    ENTER_NAME_PROMPT: "名前を入力してください",
    CHOOSE_PFP_PROMPT: "プロフィール画像を選択",
    POLL_QUESTION_PROMPT: "投票の質問:",
    POLL_TITLE: "投票",
    OPTIONS_PROMPT: "選択肢（カンマ区切り）:",
    OPTIONS_TITLE: "選択肢",
    ORIGINAL_MSG_NOT_FOUND: "履歴内に元のメッセージが見つかりません",
    REACT_PROMPT: "リアクションを入力:",
    REACT_TITLE: "リアクション",
    LEAVE_CHAT_CONFIRM: "チャット「{name}」を退出して削除しますか？",
    PROFILE_UPDATED: "プロフィールを更新しました",
    CHAT_NAME_PROMPT: "チャット名を入力してください:",
    JOINING_CHAT_TITLE: "チャットに参加",
    CHAT_PASSWORD_PROMPT: "パスワードを入力（ある場合）:",
    SET_PASSWORD_PROMPT: "グループのパスワードを設定（任意）:",
    CREATED_CHAT_ALERT: "チャット {chatId} を作成しました",
    PASSWORD_TITLE: "パスワード",
    GROUP_PASSWORD_TITLE: "グループパスワード",
    REPLYING_TO: "返信先:",
};

window.LANG_KO_MESSAGES = {

    TITLE: "메시지",
    APP_HEADING: "Polygol 메시지",
    ADD_PICTURE: "사진 추가",
    SETUP_NAME_PLACEHOLDER: "이름",
    GET_STARTED: "시작하기",
    HOME: "홈",
    CHAT: "채팅",
    YOU: "내 정보",
    START_CONVERSATION: "대화를 시작하세요",
    JOIN_CODE_PLACEHOLDER: "코드 또는 채팅방 이름 입력",
    SELECT_CHAT: "채팅 선택",
    CODE_LABEL: "코드: {code}",
    TYPING: "입력 중...",
    REPLYING: "답장 중",
    TYPE_MESSAGE_PLACEHOLDER: "메시지 입력",
    DISPLAY_NAME_PLACEHOLDER: "표시 이름",
    SAVE: "저장",
    UNIQUE_ID: "고유 ID: {id}",
    ENTER_NAME_PROMPT: "이름을 입력하세요",
    CHOOSE_PFP_PROMPT: "프로필 사진 선택",
    POLL_QUESTION_PROMPT: "투표 질문:",
    POLL_TITLE: "투표",
    OPTIONS_PROMPT: "선택 항목(쉼표로 구분):",
    OPTIONS_TITLE: "옵션",
    ORIGINAL_MSG_NOT_FOUND: "이전 메시지를 기록에서 찾을 수 없습니다",
    REACT_PROMPT: "반응 이모지를 입력하세요:",
    REACT_TITLE: "메시지 반응",
    LEAVE_CHAT_CONFIRM: "채팅 \"{name}\"에서 나가고 삭제하시겠습니까?",
    PROFILE_UPDATED: "프로필이 업데이트되었습니다",
    CHAT_NAME_PROMPT: "이 채팅방 이름을 무엇으로 하시겠습니까?",
    JOINING_CHAT_TITLE: "채팅 참여",
    CHAT_PASSWORD_PROMPT: "채팅 비밀번호 입력(있는 경우):",
    SET_PASSWORD_PROMPT: "그룹 비밀번호 설정(선택사항):",
    CREATED_CHAT_ALERT: "채팅 {chatId} 생성 완료",
    PASSWORD_TITLE: "비밀번호",
    GROUP_PASSWORD_TITLE: "그룹 비밀번호",
    REPLYING_TO: "답장 대상:",
};

window.LANG_ZH_MESSAGES = {

    TITLE: "消息",
    APP_HEADING: "Polygol消息",
    ADD_PICTURE: "添加头像",
    SETUP_NAME_PLACEHOLDER: "姓名",
    GET_STARTED: "开始使用",
    HOME: "首页",
    CHAT: "聊天",
    YOU: "我的",
    START_CONVERSATION: "开启对话",
    JOIN_CODE_PLACEHOLDER: "输入代码或聊天名称",
    SELECT_CHAT: "选择聊天",
    CODE_LABEL: "代码: {code}",
    TYPING: "正在输入...",
    REPLYING: "回复中",
    TYPE_MESSAGE_PLACEHOLDER: "输入消息",
    DISPLAY_NAME_PLACEHOLDER: "显示名称",
    SAVE: "保存",
    UNIQUE_ID: "专属ID: {id}",
    ENTER_NAME_PROMPT: "请输入名称",
    CHOOSE_PFP_PROMPT: "选择头像",
    POLL_QUESTION_PROMPT: "投票问题:",
    POLL_TITLE: "投票",
    OPTIONS_PROMPT: "选项（逗号分隔）:",
    OPTIONS_TITLE: "选项",
    ORIGINAL_MSG_NOT_FOUND: "历史记录中未找到原消息",
    REACT_PROMPT: "输入要回应的内容:",
    REACT_TITLE: "回应消息",
    LEAVE_CHAT_CONFIRM: "确定退出并删除聊天 \"{name}\" 吗？",
    PROFILE_UPDATED: "个人资料已更新",
    CHAT_NAME_PROMPT: "你想如何命名此聊天？",
    JOINING_CHAT_TITLE: "加入聊天",
    CHAT_PASSWORD_PROMPT: "输入聊天密码（若有）:",
    SET_PASSWORD_PROMPT: "为此群组设置密码（可选）:",
    CREATED_CHAT_ALERT: "已创建聊天 {chatId}",
    PASSWORD_TITLE: "密码",
    GROUP_PASSWORD_TITLE: "群组密码",
    REPLYING_TO: "回复给:",
};

var LANG_EN_MESSAGES = window.LANG_EN_MESSAGES;
var LANG_JP_MESSAGES = window.LANG_JP_MESSAGES;
var LANG_KO_MESSAGES = window.LANG_KO_MESSAGES;
var LANG_ZH_MESSAGES = window.LANG_ZH_MESSAGES;
