
// Copyright© All rights reserved.
//  _____                 _
// |_   _|_ _ _ __   __ _| |_
//   | |/ _` | '_ \ / _` | __|
//   | | (_| | | | | (_| | |_
//   |_|\__,_|_| |_|\__,_|\__|

const info = () => {
    // 모든 라이센스는 코르센(korcen)과 동일합니다 | 에 따릅니다
    console.log('--- Copyright© All rights reserved. ---')
    console.log(' PL :  [상업|수정|분배|특허 사용|개인 용도] ')
    console.log(' CD :  [라이선스 및 저장권 공지|상태 변경|소스 공개| 동일 라이선스] ')
    console.log("  _____                 _")
    console.log(" |_   _|_ _ _ __   __ _| |_")
    console.log("   | |/ _` | '_ \\ / _` | __|")
    console.log("   | | (_| | | | | (_| | |_")
    console.log("   |_|\\__,_|_| |_|\\__,_|\\__|")
    console.log("L : KR-korcen")
    console.log("L : https://github.com/KR-korcen/korcen")
    console.log("")
    console.log("---         Code Conversion         ---")
    console.log(' PL :  [위와 동일] ')
    console.log(' CD :  [위와 동일] ')
    console.log("L : shibaisdog")
    console.log("L : https://github.com/shibaisdog/Slang_Check")
}
const check_korean = (text,filter = {}) => {
    filter.비속어 ??= true
    filter.성적발언 ??= true
    filter.인종발언 ??= true
    filter.패드립 ??= true
    filter.정치 ??= true
    // korcen.py
    text = text.replaceAll('𝗌', 's')
    text = text.replaceAll('𝘴', 's')
    text = text.replaceAll('𝙨', 's')
    text = text.replaceAll('𝚜', 's')
    text = text.replaceAll('𝐬', 's')
    text = text.replaceAll('𝑠', 's')
    text = text.replaceAll('𝒔', 's')
    text = text.replaceAll('𝓈', 's')
    text = text.replaceAll('𝓼', 's')
    text = text.replaceAll('𝔰', 's')
    text = text.replaceAll('𝖘', 's')
    text = text.replaceAll('𝕤', 's')
    text = text.replaceAll('ｓ', 's')
    text = text.replaceAll('ş', 's')
    text = text.replaceAll('ⓢ', 's')
    text = text.replaceAll('⒮', 's')
    text = text.replaceAll('🅢', 's')
    text = text.replaceAll('🆂', 's')
    text = text.replaceAll('🅂', 's')
    text = text.replaceAll('𝖾', 'e')
    text = text.replaceAll('𝘦', 'e')
    text = text.replaceAll('𝙚', 'e')
    text = text.replaceAll('𝚎', 'e')
    text = text.replaceAll('𝐞', 'e')
    text = text.replaceAll('𝑒', 'e')
    text = text.replaceAll('𝒆', 'e')
    text = text.replaceAll('ℯ', 'e')
    text = text.replaceAll('𝓮', 'e')
    text = text.replaceAll('𝔢', 'e')
    text = text.replaceAll('𝖊', 'e')
    text = text.replaceAll('𝕖', 'e')
    text = text.replaceAll('ｅ', 'e')
    text = text.replaceAll('ė', 'e')
    text = text.replaceAll('ⓔ', 'e')
    text = text.replaceAll('⒠', 'e')
    text = text.replaceAll('🅔', 'e')
    text = text.replaceAll('🅴', 'e')
    text = text.replaceAll('🄴', 'e')
    text = text.replaceAll('є', 'e')
    text = text.replaceAll('𝗑', 'x')
    text = text.replaceAll('𝘹', 'x')
    text = text.replaceAll('𝙭', 'x')
    text = text.replaceAll('𝚡', 'x')
    text = text.replaceAll('𝐱', 'x')
    text = text.replaceAll('𝑥', 'x')
    text = text.replaceAll('𝒙', 'x')
    text = text.replaceAll('𝓍', 'x')
    text = text.replaceAll('𝔁', 'x')
    text = text.replaceAll('𝔵', 'x')
    text = text.replaceAll('𝖝', 'x')
    text = text.replaceAll('𝕩', 'x')
    text = text.replaceAll('ｘ', 'x')
    text = text.replaceAll('ⓧ', 'x')
    text = text.replaceAll('⒳', 'x')
    text = text.replaceAll('🅧', 'x')
    text = text.replaceAll('🆇', 'x')
    text = text.replaceAll('🅇', 'x')
    text = text.replaceAll('₨', 'rs')
    text = text.replaceAll('ų', 'u')
    text = text.replaceAll('ç', 'c')
    text = text.replaceAll('Ｆ', 'F')
    text = text.replaceAll('Ｋ', 'K')
    text = text.replaceAll('Ｃ', 'C')
    text = text.replaceAll('Ｕ', 'U')
    let newtext = text.toLowerCase()

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    text = newtext.replaceAll('ㅗ먹어', 'ㅗ')
    text = text.replaceAll('오ㅗㅗ', '')
    text = text.replaceAll('오ㅗ', '')
    text = text.replaceAll('해ㅗㅗ', '')
    text = text.replaceAll('해ㅗ', '')
    text = text.replaceAll('호ㅗㅗ', '')
    text = text.replaceAll('호ㅗ', '')
    text = text.replaceAll('로ㅗㅗ', '')
    text = text.replaceAll('로ㅗ', '')
    text = text.replaceAll('옹ㅗㅗ', '')
    text = text.replaceAll('옹ㅗ', '')
    text = text.replaceAll('롤ㅗㅗ', '')
    text = text.replaceAll('롤ㅗ', '')
    text = text.replaceAll('요ㅗ', '')
    text = text.replaceAll('우ㅗ', '')
    text = text.replaceAll('하ㅗ', '')
    text = text.replaceAll('ㅗㅗ오', '')
    text = text.replaceAll('ㅗ오', '')
    text = text.replaceAll('ㅗㅗ호', '')
    text = text.replaceAll('ㅗ호', '')
    text = text.replaceAll('ㅗㅗ로', '')
    text = text.replaceAll('ㅗ로', '')
    text = text.replaceAll('ㅗㅗ옹', '')
    text = text.replaceAll('ㅗ옹', '')
    text = text.replaceAll('ㅗㅗ롤', '')
    text = text.replaceAll('ㅗ롤', '')
    text = text.replaceAll('ㅗ요', '')
    text = text.replaceAll('ㅗ우', '')
    text = text.replaceAll('ㅗ하', '')
    text = text.replaceAll('오ㅗㅗㅗㅗ', '')
    text = text.replaceAll('오ㅗㅗㅗ', '')
    text = text.replaceAll('호ㅗㅗㅗㅗ', '')
    text = text.replaceAll('호ㅗㅗㅗ', '')
    text = text.replaceAll('로ㅗㅗㅗㅗ', '')
    text = text.replaceAll('로ㅗㅗㅗ', '')
    text = text.replaceAll('옹ㅗㅗㅗㅗ', '')
    text = text.replaceAll('옹ㅗㅗㅗ', '')
    text = text.replaceAll('롤ㅗㅗㅗㅗ', '')
    text = text.replaceAll('롤ㅗㅗㅗ', '')
    text = text.replaceAll('요ㅗㅗㅗ', '')
    text = text.replaceAll('우ㅗㅗㅗ', '')
    text = text.replaceAll('하ㅗㅗㅗ', '')
    text = text.replaceAll('ㅇㅗ', '')
    text = text.replaceAll('ㅗㄷ', '')
    text = text.replaceAll('ㅗㅜ', '')
    text = text.replaceAll('rㅗ', '')
    text = text.replaceAll('ㅗr', '')
    text = text.replaceAll('sㅗ', '')
    text = text.replaceAll('ㅗs', '')
    text = text.replaceAll('eㅗ', '')
    text = text.replaceAll('ㅗe', '')
    text = text.replaceAll('fㅗ', '')
    text = text.replaceAll('ㅗf', '')
    text = text.replaceAll('aㅗ', '')
    text = text.replaceAll('ㅗa', '')
    text = text.replaceAll('qㅗ', '')
    text = text.replaceAll('ㅗq', '')
    text = text.replaceAll('ㅗw', '')
    text = text.replaceAll('wㅗ', '')
    text = text.replaceAll('ㅗd', '')
    text = text.replaceAll('dㅗ', '')
    text = text.replaceAll('ㅗg', '')
    text = text.replaceAll('gㅗ', '')
    text = text.replaceAll('dㅗ', '')
    text = text.replaceAll(' ', '')
    let fuckyou = ["ㅗ", "┻", "┴", "┹", "_ㅣ_",
                "_/_", "⊥", "_ |\_", "_|\_", "_ㅣ\_", "_I_", "丄"]
    for (let i in fuckyou) {
        if (filter.비속어 && fuckyou[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":fuckyou[i]}
        }
    }
    let fuck = ["tq", "qt"]
    for (let i in fuck) {
        if (filter.비속어 && fuck[i] == newtext) {
            return {"result":true,"reason":"비속어","discovered":fuck[i]}
        }
    }
    newtext = text.replaceAll('118', '')
    text = text.replaceAll('218', '')
    text = text.replaceAll('318', '')
    text = text.replaceAll('418', '')
    text = text.replaceAll('518', '')
    text = text.replaceAll('618', '')
    text = text.replaceAll('718', '')
    text = text.replaceAll('818', '')
    text = text.replaceAll('918', '')
    text = text.replaceAll('018', '')
    newtext = text.replaceAll('련', '놈')
    text = text.replaceAll('뇬', '놈')
    text = text.replaceAll('놈', '놈')
    text = text.replaceAll('넘', '놈')
    text = text.replaceAll('8분', '')
    text = text.replaceAll(' ', '')
    fuck = ["씨8", "18아", "18놈", "tㅂ", "t발", "ㅆㅍ",
            "sibal", "sival", "sibar", "sibak", "sipal", "siqk", "tlbal", "tlval", "tlbar", "tlbak", "tlpal", "tlqk",
            "시bal", "시val", "시bar", "시bak", "시pal", "시qk", "시bal", "시val", "시bar", "시bak", "시pal", "시qk",
            "si바", "si발", "si불", "si빨", "si팔", "tl바", "tl발", "tl불", "tl빨", "tl팔",
            "siba", "tlba", "siva", "tlva", "tlqkf", "10발놈", "10발년", "tlqkd", "si8", "10R놈", "시8", "십8", "s1bal", "sib알", "씨x","siㅂ"]
    for (let i in fuck) {
        if (filter.비속어 && fuck[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":fuck[i]}
        }
    }
    text = newtext.replaceAll(/\^/g, 'ㅅ')
    text = text.replaceAll('人', 'ㅅ')
    text = text.replaceAll('∧', 'ㅅ')
    text = text.replaceAll('／＼', 'ㅅ')
    text = text.replaceAll('/＼', 'ㅅ')
    text = text.replaceAll('㉦', 'ㅅ')
    text = text.replaceAll('丨발', '시발')
    text = text.replaceAll('丨벌', '시발')
    text = text.replaceAll('丨바', '시발')
    text = text.replaceAll('甘', 'ㅂ')
    text = text.replaceAll('廿', 'ㅂ')
    text = text.replaceAll('己', 'ㄹ')
    text = text.replaceAll('卜', 'ㅏ')
    text = text.replaceAll('l', 'ㅣ')
    text = text.replaceAll('r', 'ㅏ')
    text = text.replaceAll('ᐲ', 'ㅅ')
    text = text.replaceAll('ᗨ', 'ㅂ')
    text = text.replaceAll('시ㅣ', '시')
    text = text.replaceAll('씨ㅣ', '씨')
    text = text.replaceAll('ㅅ1', '시')
    text = text.replaceAll('ㅍㅅㅍ', '')
    text = text.replaceAll('발 닦', '')
    text = text.replaceAll('동시 8', '')
    text = text.replaceAll('8시발', '시발')
    text = text.replaceAll('8시 ', '')
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    fuck = ["시ㅂ", "시ㅏㄹ", "씨ㅂ", "씨ㅏㄹ", "ㅣ발", "ㅆ발", "ㅅ발", "ㅅㅂ", "ㅆㅂ", "ㅆ바", "ㅅ바",
            "시ㅂㅏ", "ㅅㅂㅏ", "시ㅏㄹ", "씨ㅏㄹ", "ㅅ불", "ㅆ불", "ㅅ쁠", "ㅆ뿔", "ㅆㅣ발", "ㅅㅟ발", "ㅅㅣㅂㅏ",
            "ㅣ바알", "ㅅ벌", "^^ㅣ벌", "ㅆ삐라", "씨ㅃ"]
    for (let i in fuck) {
        if (filter.비속어 && fuck[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":fuck[i]}
        }
    }
    text = text.replaceAll('다시 방', '')
    text = text.replaceAll('다시 불러', '')
    text = text.replaceAll('시발음', '')
    text = text.replaceAll('시발택시', '')
    text = text.replaceAll('시발자동차', '')
    text = text.replaceAll('정치발', '')
    text = text.replaceAll('시발점', '')
    text = text.replaceAll('시발유', '')
    text = text.replaceAll('시발역', '')
    text = text.replaceAll('시발수뢰', '')
    text = text.replaceAll('아저씨바', '')
    text = text.replaceAll('아저씨발', '')
    text = text.replaceAll('시바견', '')
    text = text.replaceAll('벌어', '')
    text = text.replaceAll('시바이누', '')
    text = text.replaceAll('시바스리갈', '')
    text = text.replaceAll('시바산', '')
    text = text.replaceAll('시바신', '')
    text = text.replaceAll('오리발', '')
    text = text.replaceAll('발끝', '')
    text = text.replaceAll('다시바', '')
    text = text.replaceAll('다시팔', '')
    text = text.replaceAll('비슈누시바', '')
    text = text.replaceAll('시바핫카이', '')
    text = text.replaceAll('시바타이쥬', '')
    text = text.replaceAll('데스티니시바', '')
    text = text.replaceAll('시바루', '')
    text = text.replaceAll('시바료타로', '')
    text = text.replaceAll('시바라스시', '')
    text = text.replaceAll('임시방편', '')
    text = text.replaceAll('젤리', '')
    text = text.replaceAll('발사', '')
    text = text.replaceAll('크시야', '')
    text = text.replaceAll('크시', '')
    text = text.replaceAll('어찌', '')
    text = text.replaceAll('가시방석', '')
    text = text.replaceAll('발로란트방', '')
    text = text.replaceAll('발로란트', '')
    text = text.replaceAll('발로', '')
    text = text.replaceAll('씨발라', '')
    text = text.replaceAll('무시발언', '')
    text = text.replaceAll('일시불', '')
    text = text.replaceAll('우리', '')
    text = text.replaceAll('혹시', '')
    text = text.replaceAll('아조씨', '')
    text = text.replaceAll('아저씨', '')
    text = text.replaceAll('바로', '')
    text = text.replaceAll('저거시', '')
    text = text.replaceAll('우리발', '')
    text = text.replaceAll('피시방', '')
    text = text.replaceAll('피씨방', '')
    text = text.replaceAll('방장', '')
    text = text.replaceAll('시바사키', '')
    text = text.replaceAll('시발차', '')
    text = text.replaceAll('로벅스', '')
    text = text.replaceAll('쉬바나', '')
    text = text.replaceAll('벌었는데', '')
    text = text.replaceAll('엠씨방', '')
    text = text.replaceAll('빨리', '')
    text = text.replaceAll('파엠', '')
    text = text.replaceAll('벌금', '')
    text = text.replaceAll('시방향', '')
    text = text.replaceAll('불법', '')
    text = text.replaceAll('할시', '')
    text = text.replaceAll('발릴', '')
    text = text.replaceAll('발표', '')
    text = text.replaceAll('방송', '')
    text = text.replaceAll('역시', '')
    text = text.replaceAll('바보', '')
    text = text.replaceAll('쿨리발리', '')
    text = text.replaceAll('슈발리에', '')
    text = text.replaceAll('방탄', '')
    text = text.replaceAll('방어', '')
    text = text.replaceAll('발표', '')
    text = text.replaceAll('상시', '')
    text = text.replaceAll('슈발리에', '')
    text = text.replaceAll('아', '')
    text = text.replaceAll('이', '')
    text = text.replaceAll('일', '')
    text = text.replaceAll('의', '')
    text = text.replaceAll('하시바라 이노스케', '')
    text = text.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('련', '놈')
    text = text.replaceAll('뇬', '놈')
    text = text.replaceAll('놈', '놈')
    text = text.replaceAll('넘', '놈')
    fuck = ["시발", "씨발", "시봘", "씨봘", "씨바", "시바", "샤발", "씌발", "씹발", "시벌", "시팔", "싯팔",
            "씨빨", "씨랼", "씨파", "띠발", "띡발", "띸발", "싸발", "십발", "슈발", "야발", "씨불", "씨랄",
            "쉬발", "쓰발", "쓔발", "쌰발", "쉬발", "쒸발", "씨팔", "씨밝", "씨밯", "쑤발", "치발", "샤발",
            "발씨", "리발", "씨볼", "찌발", "씨비바라랄", "시바랄", "씨바라", "쒸팔", "쉬팔", "씨밮", "쒸밮", "시밮",
            "씨삐라", "씨벌", "슈벌", "시불", "시부렝", "씨부렝", "시부랭", "씨부랭", "시부랭", "발놈시", "뛰발",
            "뛰봘", "뜨발", "뜨벌", "띄발", "씨바알", "샤빨", "샤발", "스벌", "쓰벌", "신발련", "신발년", "신발놈", "띠발",
            "띠바랄", "시방", "씨방", "씨부련", "시부련", "씨잇발", "씨잇파알", "씨잇바알", "시잇발", "시잇바알", "쒸이발",
            "쉬이빨", "씹팔", "쉬바", "시병발신", "씱빩", "쉬바난", "쉬바놈", "쉬바녀", "쉬바년", "쉬바노마", "쉬바새", "쉬불", "쉬이바",
            "시벨놈", "시뱅놈", "시봉새", "씻뻘"]
    for (let i in fuck) {
        if (filter.비속어 && fuck[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":fuck[i]}
        }
    }
    newtext = text.replaceAll('련', '놈')
    text = text.replaceAll('뇬', '놈')
    text = text.replaceAll('놈', '놈')
    text = text.replaceAll('넘', '놈')
    fuck = ["18것", "18놈", "18럼", "18롬", "18새끼",
            "18세끼", "18세리", "18섹", "18쉑", "10쉑"]
    for (let i in fuck) {
        if (filter.비속어 && fuck[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":fuck[i]}
        }
    }
    newtext = text.replaceAll(' ', '')
    text = text.replaceAll("opgg", "")
    text = text.replaceAll("op.gg", "")
    let bullshit1 = ["wlfkf", "g랄", "g럴", "g롤", "g뢀", "giral", "zi랄", "ji랄"]
    for (let i in bullshit1) {
        if (filter.비속어 && bullshit1[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":bullshit1[i]}
        }
    }
    text = newtext.replaceAll("g랄", "지랄")
    text = text.replaceAll('ji랄', '지랄')
    text = text.replaceAll('己', 'ㄹ')
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    text = text.replaceAll("있지", "")
    text = text.replaceAll("없지", "")
    text = text.replaceAll("하지", "")
    text = text.replaceAll('알았지', '')
    text = text.replaceAll('몰랐지', '')
    text = text.replaceAll('근데', '')
    text = text.replaceAll('지근거', '')
    text = text.replaceAll('지근하', '')
    text = text.replaceAll('지근지근', '')
    text = text.replaceAll('지근속근', '')
    text = text.replaceAll('속든지근', '')
    text = text.replaceAll('미지근', '')
    text = text.replaceAll("근", "ㄹ")
    text = text.replaceAll("ㄹㅇ", "")
    bullshit1 = ["ㅈㄹ", "지ㄹ", "ㅈ랄", "ㅈ라"]
    for (let i in bullshit1) {
        if (filter.비속어 && bullshit1[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":bullshit1[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll("있지", "")
    text = text.replaceAll("없지", "")
    text = text.replaceAll("하지", "")
    text = text.replaceAll('지랄탄', '')
    text = text.replaceAll('지랄버릇', '')
    text = text.replaceAll('이', '')
    text = text.replaceAll('알았지', '')
    text = text.replaceAll('몰랐지', '')
    text = text.replaceAll('근데', '')
    let bullshit2 = ["지랄", "찌랄", "지럴", "지롤", "랄지", "쥐랄", "쮜랄", "지뢀", "띄랄"]
    for (let i in bullshit2) {
        if (filter.비속어 && bullshit2[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":bullshit2[i]}
        }
    }
    newtext = text.replaceAll('0등신', '')
    text = text.replaceAll('1등신', '')
    text = text.replaceAll('2등신', '')
    text = text.replaceAll('3등신', '')
    text = text.replaceAll('4등신', '')
    text = text.replaceAll('5등신', '')
    text = text.replaceAll('6등신', '')
    text = text.replaceAll('7등신', '')
    text = text.replaceAll('8등신', '')
    text = text.replaceAll('9등신', '')
    text = text.replaceAll('붕우유신', '')
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    text = text.replaceAll('빙', '병')
    text = text.replaceAll('븅', '병')
    text = text.replaceAll('등', '병')
    text = text.replaceAll('붱', '병')
    text = text.replaceAll('뵝', '병')
    text = text.replaceAll('뼝', '병')
    text = text.replaceAll('싄', '신')
    text = text.replaceAll('씬', '신')
    text = text.replaceAll('우', '')
    text = text.replaceAll('웅', '')
    text = text.replaceAll('융', '')
    text = text.replaceAll('유', '')
    let asshole = ["ㅄ", "ㅂㅅ", "병ㅅ", "ㅂ신", "ㅕㅇ신", "ㅂㅇ신", "뷰신"]
    for (let i in asshole) {
        if (filter.비속어 && asshole[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":asshole[i]}
        }
    }
    text = text.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('영', '')
    text = text.replaceAll('엉', '')
    asshole = ["병신", "병딱", "벼신", "붱신", "뼝신", "뿽신", "삥신", "병시니", "병형신"]
    for (let i in asshole) {
        if (filter.비속어 && asshole[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":asshole[i]}
        }
    }
    newtext = text.replaceAll('전염병', '')
    text = text.replaceAll('감염병', '')
    text = text.replaceAll(/[^가-힣]/g, "")
    let motherfucker = ["염병", "엠병", "옘병", "염병", "얨병", "옘뼝"]
    for (let i in motherfucker) {
        if (filter.비속어 && motherfucker[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":motherfucker[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('왜꺼져', '')
    text = text.replaceAll('꺼져요', '')
    text = text.replaceAll('이꺼져', '')
    text = text.replaceAll('꺼져서', '')
    text = text.replaceAll('내꺼져', '')
    text = text.replaceAll('제꺼져', '')
    text = text.replaceAll('꺼져있', '')
    text = text.replaceAll('꺼져도', '')
    text = text.replaceAll('계속꺼져', '')
    text = text.replaceAll('꺼져가', '')
    if (filter.비속어 && "꺼져".includes(text) && text) {
        return {"result":true,"reason":"비속어","discovered":"꺼져"}
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    let shit = ["엿같", "엿가튼", "엿먹어", "뭣같은"]
    for (let i in shit) {
        if (filter.비속어 && shit[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":shit[i]}
        }
    }
    let sonofbitch = ["rotorl", "rotprl", "sib새", "AH끼", "sㅐ끼", "x끼"]
    for (let i in sonofbitch) {
        if (filter.비속어 && sonofbitch[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":sonofbitch[i]}
        }
    }
    text = newtext.replaceAll(/\^/g, 'ㅅ')
    text = text.replaceAll('H', 'ㅐ')
    text = text.replaceAll('새로', '')
    text = text.replaceAll('77', 'ㄲ')
    text = text.replaceAll('l', 'ㅣ')
    text = text.replaceAll(' ', '')
    text = text.replaceAll('10새', '새끼')
    text = text.replaceAll('10섹', '새끼')
    text = text.replaceAll('10쌔', '새끼')
    text = text.replaceAll('10쎄', '새끼')
    text = text.replaceAll('10새', '새끼')
    text = text.replaceAll('10쉑', '새끼')
    text = text.replaceAll('🐦', '새')
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    sonofbitch = ["ㅅㄲ", "ㅅ끼", "ㅆ끼", "색ㄲㅣ", "ㅆㅐㄲㅑ", "ㅆㅐㄲㅣ"]
    for (let i in sonofbitch) {
        if (filter.비속어 && sonofbitch[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":sonofbitch[i]}
        }
    }
    text = text.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('의새끼', '')
    text = text.replaceAll('애', '')
    text = text.replaceAll('에', '')
    text = text.replaceAll('루세끼', '')
    text = text.replaceAll('시세끼', '')
    text = text.replaceAll('세끼먹', '')
    text = text.replaceAll('고양이새끼', '')
    text = text.replaceAll('호랑이새끼', '')
    text = text.replaceAll('말새끼', '')
    text = text.replaceAll('사자새끼', '')
    text = text.replaceAll('범새끼', '')
    text = text.replaceAll('삵새끼', '')
    text = text.replaceAll('키보드', '')
    text = text.replaceAll('새끼손', '')
    text = text.replaceAll('셰리프', '')
    sonofbitch = ["새끼", "쉐리", "쌔끼", "썌끼", "쎼끼", "쌬끼", "샠끼", "세끼", "샊", "쌖", "섺", "쎆", "십새", "새키", "씹색", "새까", "새꺄",
                    "새뀌", "새끠", "새캬", "색꺄", "색끼", "섹히", "셁기", "셁끼", "셐기", "셰끼", "셰리", "쉐꺄", "십색꺄", "십떼끼", "십데꺄", "십때끼", "십새꺄", "십새캬", "쉑히"]
    for (let i in sonofbitch) {
        if (filter.비속어 && sonofbitch[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":sonofbitch[i]}
        }
    }
    let dick = ["w같은"]
    for (let i in dick) {
        if (filter.비속어 && dick[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"비속어","discovered":dick[i]}
        }
    }
    newtext = text.replaceAll('丕', '조')
    text = text.replaceAll('刀卜', '까')
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    text = text.replaceAll('줫습니다', '')
    text = text.replaceAll('쫒아', '')
    text = text.replaceAll('쫒기다', '')
    text = text.replaceAll('쫒기라', '')
    text = text.replaceAll('쫒기로', '')
    text = text.replaceAll('쫒기를', '')
    text = text.replaceAll('쫒기며', '')
    text = text.replaceAll('쫒기는', '')
    text = text.replaceAll('쫒기나', '')
    text = text.replaceAll('쫒겨', '')
    text = text.replaceAll('쫒겻', '')
    text = text.replaceAll('쫒겼', '')
    text = text.replaceAll('쫒았', '')
    text = text.replaceAll('쫒다', '')
    text = text.replaceAll('줫는', '')
    text = text.replaceAll('줫어', '')
    text = text.replaceAll('줬는', '')
    text = text.replaceAll('줫군', '')
    text = text.replaceAll('줬다', '')
    text = text.replaceAll('줬어', '')
    text = text.replaceAll('천조', '')
    text = text.replaceAll('쫒기', '')
    dick = ["ㅈ같", "ㅈ망", "ㅈ까", "ㅈ경", "ㅈ가튼"]
    for (let i in dick) {
        if (filter.비속어 && dick[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":dick[i]}
        }
    }
    text = text.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('해줫더니', '')
    text = text.replaceAll('줫다', '')
    text = text.replaceAll('내쫒은', '')
    text = text.replaceAll('내쫒다', '')
    dick = ["좆", "촟", "조까", "좈", "쫒", "졷", "좃", "줮",
            "좋같", "좃같", "좃물", "좃밥", "줫", "좋밥", "좋물", "좇"]
    for (let i in dick) {
        if (filter.비속어 && dick[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":dick[i]}
        }
    }
    let damn = ["썅", "씨앙", "씨양", "샤앙", "쌰앙"]
    for (let i in damn) {
        if (filter.비속어 && damn[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":damn[i]}
        }
    }
    let swear = ["tq", "qt"]
    for (let i in swear) {
        if (filter.비속어 && swear[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":swear[i]}
        }
    }
    let whatthefuck = ["뻑유", "뻐킹", "뻐큐", "빡큐", "뿩큐", "뻑큐", "빡유", "뻒큐"]
    for (let i in whatthefuck) {
        if (filter.비속어 && whatthefuck[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":whatthefuck[i]}
        }
    }
    let shutup = ["닥쳐", "닭쳐", "닥치라", "아가리해"]
    for (let i in shutup) {
        if (filter.비속어 && shutup[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":shutup[i]}
        }
    }
    text = newtext.replaceAll(/[0-9]+/g, '')
    let sonofagun = ["dog새"]
    for (let i in sonofagun) {
        if (filter.비속어 && sonofagun[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":sonofagun[i]}
        }
    }
    text = newtext.replaceAll(/[^ㄱ-힣]/g, "")
    sonofagun = ["개ㅐ색"]
    for (let i in sonofagun) {
        if (filter.비속어 && sonofagun[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":sonofagun[i]}
        }
    }
    newtext = text.replaceAll('0개', '')
    text = text.replaceAll('1개', '')
    text = text.replaceAll('2개', '')
    text = text.replaceAll('3개', '')
    text = text.replaceAll('4개', '')
    text = text.replaceAll('5개', '')
    text = text.replaceAll('6개', '')
    text = text.replaceAll('7개', '')
    text = text.replaceAll('8개', '')
    text = text.replaceAll('9개', '')
    text = text.replaceAll('0개', '')
    text = text.replaceAll('1년', '')
    text = text.replaceAll('2년', '')
    text = text.replaceAll('3년', '')
    text = text.replaceAll('4년', '')
    text = text.replaceAll('5년', '')
    text = text.replaceAll('6년', '')
    text = text.replaceAll('7년', '')
    text = text.replaceAll('8년', '')
    text = text.replaceAll('9년', '')
    text = text.replaceAll('🐕', '개')
    text = text.replaceAll('🐦', '새')
    text = text.replaceAll('재밌게 놈', '')
    text = text.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('있게', '')
    text = text.replaceAll('년생', '')
    text = text.replaceAll('무지개색', '')
    text = text.replaceAll('떠돌이개', '')
    text = text.replaceAll('에게', '')
    text = text.replaceAll('넘는', '')
    text = text.replaceAll('소개', '')
    text = text.replaceAll('생긴게', '')
    sonofagun = ["개같", "개가튼", "개쉑", "개스키", "개세끼", "개색히", "개가뇬", "개새기", "개쌔기", "개쌔끼", "쌖", "쎆", "새긔", "개소리", "개년", "개소리",
                    "개드립", "개돼지", "개씹창", "개간나", "개스끼", "개섹기", "개자식", "개때꺄", "개때끼", "개발남아", "개샛끼", "개가든", "개가뜬", "개가턴", "개가툰", "개가튼",
                    "개갇은", "개갈보", "개걸레", "개너마", "개너므", "개넌", "개넘", "개녀나", "개년", "개노마", "개노무새끼", "개논", "개놈", "개뇨나", "개뇬", "개뇸", "개뇽", "개눔",
                    "개느마", "개늠", "개때꺄", "개때끼", "개떼끼", "개랙기", "개련", "개발남아", "개발뇬", "개색", "개색끼", "개샊", "개샛끼", "개샛키", "개샛킹", "개샛히", "개샜끼",
                    "개생키", "개샠", "개샤끼", "개샤킥", "개샥", "개샹늠", "개세끼", "개세리", "개세키", "개섹히", "개섺", "개셃", "개셋키", "개셐", "개셰리", "개솩", "개쇄끼", "개쇅",
                    "개쇅끼", "개쇅키", "개쇗", "개쇠리", "개쉐끼", "개쉐리", "개쉐키", "개쉑", "개쉑갸", "개쉑기", "개쉑꺄", "개쉑끼", "개쉑캬", "개쉑키", "개쉑히", "개쉢", "개쉨",
                    "개쉬끼", "개쉬리", "개쉽", "개스끼", "개스키", "개습", "개습세", "개습쌔", "개싀기", "개싀끼", "개싀밸", "개싀킈", "개싀키", "개싏", "개싑창", "개싘",
                    "개시끼", "개시퀴", "개시키", "개식기", "개식끼", "개식히", "개십새", "개십팔", "개싯기", "개싯끼", "개싯키", "개싴", "개쌍넘", "개쌍년", "개쌍놈", "개쌍눔",
                    "개쌍늠", "개쌍연", "개쌍영", "개쌔꺄", "개쌔끼", "개쌕", "개쌕끼", "개쌰깨", "개썅", "개쎄", "개쎅", "개쎼키", "개쐐리", "개쒜", "개쒝", "개쒯", "개쒸", "개쒸빨놈",
                    "개쒹기", "개쓉", "개쒹기", "개쓉", "개씀", "개씁", "개씌끼", "개씨끼", "개씨팕", "개씨팔", "개잡것", "개잡년", "개잡놈", "개잡뇬", "개젓", "개젖", "개젗", "개졋",
                    "개졎", "개조또", "개조옷", "개족", "개좃", "개좆", "개좇", "개지랄", "개지럴", "개창년", "개허러", "개허벌년", "개호러", "개호로", "개후랄", "개후레", "개후로",
                    "개후장", "걔섀끼", "걔잡넘", "걔잡년", "걔잡뇬", "게가튼", "게같은", "게너마", "게년", "게노마", "게놈", "게뇨나", "게뇬", "게뇸", "게뇽", "게눔", "게늠",
                    "게띠발넘", "게부랄", "게부알", "게새끼", "게새리", "게새키", "게색", "게색기", "게색끼", "게샛키", "게세꺄", "게자지", "게잡넘", "게잡년", "게잡뇬", "게젓",
                    "게좆", "계같은뇬", "계뇬", "계뇽", "쉬댕", "쉬뎅"]
    for (let i in sonofagun) {
        if (filter.비속어 && sonofagun[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":sonofagun[i]}
        }
    }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    text = newtext.replaceAll(/[^ㄱ-힣]/g, "")
    text = text.replaceAll(' ', '')
    text = text.replaceAll('년', '놈')
    text = text.replaceAll('련', '놈')
    let damnit = ["ㅁㅊ", "ㅁ친", "ㅁ쳤", "aㅣ친", "me친", "미ㅊ", "DI친"]
    for (let i in damnit) {
        if (filter.비속어 && damnit[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":damnit[i]}
        }
    }
    text = text.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('거미', '')
    text = text.replaceAll('친구', '')
    text = text.replaceAll('개미', '')
    text = text.replaceAll('이미친', '')
    text = text.replaceAll('미친증', '')
    text = text.replaceAll('동그라미', '')
    text = text.replaceAll('미틴', '미친')
    text = text.replaceAll('년', '놈')
    text = text.replaceAll('련', '놈')
    damnit = ["미친놈", "무친놈"]
    for (let i in damnit) {
        if (filter.비속어 && damnit[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":damnit[i]}
        }
    }
    text = text.replaceAll(/[^가-힣]/g, "")
    let picking = ["꼽냐", "꼽니", "꼽나"]
    for (let i in picking) {
        if (filter.비속어 && picking[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":picking[i]}
        }
    }
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    picking = ["ㅈㄴ", "ㅈ나", "존ㄴ", "존맛"]
    for (let i in picking) {
        if (filter.비속어 && picking[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":picking[i]}
        }
    }
    text = text.replaceAll("그만 졸라", "")
    text = text.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll("졸라서", "")
    text = text.replaceAll("졸라맨", "")
    picking = ["존나", "존내", "쫀나", "존네","줜나"]
    for (let i in picking) {
        if (filter.비속어 && picking[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":picking[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll("뒤져봐야", "")
    text = text.replaceAll("뒤질뻔", "")
    text = text.replaceAll("뒤져보다", "")
    text = text.replaceAll("뒤져보는", "")
    text = text.replaceAll("뒤져본", "")
    text = text.replaceAll("뒤져볼", "")
    picking = ["뒤져", "뒈져", "뒈진", "뒈질", "디져라", "디진다", "디질래", "뒤질"]
    for (let i in picking) {
        if (filter.비속어 && picking[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":picking[i]}
        }
    }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    text = text.replaceAll(' ', '')
    let pussy = ["ⓑⓞⓩⓘ", "bozi", "보ㅈㅣ"]
    for (let i in pussy) {
        if (filter.성적발언 && pussy[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":pussy[i]}
        }
    }
    text = newtext.replaceAll('보지도 못', '')
    text = text.replaceAll('보지도 않', '')
    text = text.replaceAll('인가 보지', '')
    text = text.replaceAll('면접 보지', '')
    text = text.replaceAll('영화 보지', '')
    text = text.replaceAll('애니 보지', '')
    text = text.replaceAll('만화 보지', '')
    text = text.replaceAll('사진 보지', '')
    text = text.replaceAll('그림 보지', '')
    text = text.replaceAll('면접보지', '')
    text = text.replaceAll('영화보지', '')
    text = text.replaceAll('애니보지', '')
    text = text.replaceAll('만화보지', '')
    text = text.replaceAll('사진보지', '')
    text = text.replaceAll('그림보지', '')
    text = text.replaceAll('을 보지', '')
    text = text.replaceAll('나 보지', '')
    text = text.replaceAll('못 보지', '')
    text = text.replaceAll('안 보지', '')
    text = text.replaceAll('왜 보지', '')
    text = text.replaceAll('뭐 보지', '')
    text = text.replaceAll('다 보지', '')
    text = text.replaceAll('빨리 보지', '')
    text = text.replaceAll('보지도 마', '')
    text = text.replaceAll('보지는 않', '')
    text = text.replaceAll('보지안으', '')
    text = text.replaceAll('보지안아', '')
    text = text.replaceAll('게 보지', '')
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    text = text.replaceAll('보g', '보지')
    text = text.replaceAll('켜보지', '')
    text = text.replaceAll('보지맙', '')
    text = text.replaceAll('초보지', '')
    text = text.replaceAll('로보지', '')
    text = text.replaceAll('가보지', '')
    text = text.replaceAll('홍보지', '')
    text = text.replaceAll('서보지', '')
    text = text.replaceAll('보지금', '')
    text = text.replaceAll('보지못', '')
    text = text.replaceAll('정지금', '')
    text = text.replaceAll('걸보지', '')
    text = text.replaceAll('보지는', '')
    text = text.replaceAll('보지지', '')
    text = text.replaceAll('보지않', '')
    text = text.replaceAll('해보지', '')
    text = text.replaceAll('보지마', '')
    text = text.replaceAll('어케 보지', '')
    text = text.replaceAll('보지말', '')
    text = text.replaceAll('정보', '')
    text = text.replaceAll('지팡이', '')
    text = text.replaceAll('행보', '')
    text = text.replaceAll('바보지', '')
    text = text.replaceAll('바보짓', '')
    text = text.replaceAll('물어보지', '')
    text = text.replaceAll('하시나보지', '')
    text = text.replaceAll('오', '')
    pussy = ["보지", "버지물", "버짓물", "보짓", "ⓑⓞⓩⓘ",
                "bozi", "개보즤", "개보지", "버지벌렁벌렁", "보짖", "뵤즤", "봊이"]
    for (let i in pussy) {
        if (filter.성적발언 && pussy[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":pussy[i]}
        }
    }
    let dicks = ["ja지"]
    for (let i in dicks) {
        if (filter.성적발언 && dicks[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"성적발언","discovered":dicks[i]}
        }
    }
    text = newtext.replaceAll(/[^ㄱ-힣]/g, "")
    let onahole = ["ㅈㅈ빨", "자ㅈ", "ㅈ지빨"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    text = newtext.replaceAll('언제 자지', '')
    text = text.replaceAll(' 지급', '')
    text = text.replaceAll('남자지', '')
    text = text.replaceAll('여자지', '')
    text = text.replaceAll('감자지', '')
    text = text.replaceAll('왁자지', '')
    text = text.replaceAll('자지러', '')
    text = text.replaceAll('개발자', '')
    text = text.replaceAll('관리자', '')
    text = text.replaceAll('약탈자', '')
    text = text.replaceAll('타자지', '')
    text = text.replaceAll('혼자', '')
    text = text.replaceAll('자지원', '')
    text = text.replaceAll('사용자', '')
    text = text.replaceAll('경력자', '')
    text = text.replaceAll('지식', '')
    text = text.replaceAll('자지마', '')
    text = text.replaceAll('자지말', '')
    text = text.replaceAll('지원자', '')
    text = text.replaceAll('부자지', '')
    text = text.replaceAll('혜자지', '')
    text = text.replaceAll('잘 자지', '')
    text = text.replaceAll('일자지', '')
    text = text.replaceAll('일찍 자지', '')
    text = text.replaceAll('지원', '')
    text = text.replaceAll('자지금', '')
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    text = text.replaceAll('자지않', '')
    text = text.replaceAll('자지도마', '')
    text = text.replaceAll('자지는않', '')
    text = text.replaceAll('자지좀마', '')
    text = text.replaceAll('안자지', '')
    text = text.replaceAll('못자지', '')
    text = text.replaceAll('자지금', '')
    text = text.replaceAll('지건', '')
    text = text.replaceAll('감자', '')
    text = text.replaceAll('아', '')
    dicks = ["자지", "자짓", "잦이", "쟈지"]
    for (let i in dicks) {
        if (filter.성적발언 && dicks[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":dicks[i]}
        }
    }
    text = newtext.replaceAll('cess', '')
    text = text.replaceAll("```css", "")
    text = text.replaceAll("ex\)", "")
    text = text.replaceAll('exit', '')
    text = text.replaceAll('ext', '')
    text = text.replaceAll('images', '')
    text = text.replaceAll('https', '')
    text = text.replaceAll("\(ex", "")
    text = text.replaceAll(".ex", "")
    text = text.replaceAll('physics', '')
    text = text.replaceAll('features', '')
    text = text.replaceAll('exam', '')
    text = text.replaceAll('phase', '')
    text = text.replaceAll('except', '')
    text = text.replaceAll('sexual', '')
    text = text.replaceAll('sexy', '')
    text = text.replaceAll('[^a-z]', '')
    let sex = ["sex", "s스", "x스", "se스", "se스", "s스",
            "ㅅㅅ", "s하고e싶다x", "ㅅㅔㅅㄱ", "이=스", "ㅇl=스"]
    for (let i in sex) {
        if (filter.성적발언 && sex[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":sex[i]}
        }
    }
    text = newtext.replaceAll(/[0-9]+/g, 'ㅅ')
    text = text.replaceAll('엑', '')
    text = text.replaceAll('0ㅑ', '야')
    text = text.replaceAll(/[^ㄱ-힣]/g, "")
    sex = ["ㅅㅔㄱ스", "섹ㅅ", "ㅅ스", "세ㄱㅅ", "ㅅㅔㄱㅅ"]
    for (let i in sex) {
        if (filter.성적발언 && sex[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":sex[i]}
        }
    }
    text = text.replaceAll("야스오", "")
    text = text.replaceAll("크시야", "")
    text = text.replaceAll("카구야", "")
    text = text.replaceAll("스파이", "")
    text = text.replaceAll("말이야", "")
    text = text.replaceAll("스티브", "")
    text = text.replaceAll("스쿼드", "")
    text = text.replaceAll("파랑색", "")
    text = text.replaceAll("오야스미", "")
    text = text.replaceAll("노란색", "")
    text = text.replaceAll("빨간색", "")
    text = text.replaceAll("초록색", "")
    text = text.replaceAll("보라색", "")
    text = text.replaceAll("청색", "")
    text = text.replaceAll("보라색", "")
    text = text.replaceAll("핑크색", "")
    text = text.replaceAll("남색", "")
    text = text.replaceAll("검은색", "")
    text = text.replaceAll("하양색", "")
    text = text.replaceAll("주황색", "")
    text = text.replaceAll("연두색", "")
    text = text.replaceAll("스공", "")
    text = text.replaceAll("스시", "")
    text = text.replaceAll("스키장", "")
    text = text.replaceAll("스킨", "")
    text = text.replaceAll('스킬', '')
    text = text.replaceAll('스틸', '')
    text = text.replaceAll('스탑', '')
    text = text.replaceAll('스트레스', '')
    text = text.replaceAll('해야', '')
    text = text.replaceAll('카시야스', '')
    text = text.replaceAll('야스톤', '')
    text = text.replaceAll(/[^가-힣]/g, "")
    sex = ["섹스", "섻", "쉑스", "섿스", "섹그", "야스", "색스", "셱스", "섁스", "세엑스", "썩스", "섹수", "섹파", "섹하자", "쉐스", "쉑스", "쉐엑스", "색수", "세엑수우", "섹하고",
            "섹하구", "섹하자", "섹하장", "섹하쟈", "섹한번", "쌕스"]
    for (let i in sex) {
        if (filter.성적발언 && sex[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":sex[i]}
        }
    }
    dick = ["꼬3", "꼬툭튀", "꼬톡튀"]
    for (let i in dick) {
        if (filter.성적발언 && dick[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":dick[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    let fireegg = ["불알", "부랄", "뽕알", "뿅알", "뿌랄", "뿔알", "개부달",
                "개부랄", "개부러럴", "개부럴", "개부뢀", "개부알", "개불알", "똘추", "똥구멍", "부라랄"]
    for (let i in fireegg) {
        if (filter.성적발언 && fireegg[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":fireegg[i]}
        }
    }
    text = newtext.replaceAll(/[^ㄱ-힣]/g, "")
    onahole = ["오나홍", "오나홀", "ㅇㄴ홀", "텐가", "바이브레이터", "오ㄴ홀", "ㅇ나홀"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    sex = ["씹하다"]
    for (let i in sex) {
        if (filter.성적발언 && sex[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":sex[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    onahole = ["매춘부", "성노예"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    onahole = ["자궁문신"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    onahole = ["모유물", "로리물", "근친상간", "룸섹스", "원조교재", "속박플레이", "야외플레이"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll("위대한", "")
    text = text.replaceAll("소유자", "")
    text = text.replaceAll("작업자", "")
    text = text.replaceAll("자기위로", "자위")
    text = text.replaceAll("위대하지", "")
    text = text.replaceAll("암살자", "")
    text = text.replaceAll("학자", "")
    onahole = ["딸딸이", "질싸", "안에사정", "자위남", "자위녀", "폰섹", "포르노", "폰세엑", "폰쉑", "폰쎅", "질내사정", "그룹섹", "남창", "男色", "누워라이년아",
                "누웠냐씨방새", "다리벌려", "대줄년", "뒤로너어줘", "딸따뤼", "딸쳐", "떡쳐라", "막대쑤셔줘", "막대핥아줘", "먹고보니내딸", "먹고보니누나", "먹고보니딸",
                "먹고보니똥개", "먹고보니엄마", "먹고보니응아", "먹고보니재수", "먹고보니처제", "먹고보니형수", "몸뚱이줄께", "몸안에사정", "밖에다쌀께", "박고빼고",
                "배위에싸죠", "몸의대화", "섹할", "섹해"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    onahole = ["g스팟", "지스팟"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    onahole = ["크리토리스", "클리토리스", "페니스", "애널"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    onahole = ["젖까", "젖가튼", "젖나", "젖만"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    onahole = ["ja위"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('개발자', '')
    text = text.replaceAll('관리자', '')
    text = text.replaceAll('약탈자', '')
    text = text.replaceAll('사용자', '')
    text = text.replaceAll('지원자', '')
    text = text.replaceAll("위대한", "")
    text = text.replaceAll("소유자", "")
    text = text.replaceAll("작업자", "")
    text = text.replaceAll("자기위로", "자위")
    onahole = ["자위", "고자새끼", "고츄", "꺼추", "꼬추"]
    for (let i in onahole) {
        if (filter.성적발언 && onahole[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":onahole[i]}
        }
    }
    if (filter.성적발언 && "freenude".includes(text) && text) {
        return {"result":true,"reason":"성적발언","discovered":"freenude"}
    }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    newtext = text.replaceAll('뇬', '련')
    text = text.replaceAll('놈', '련')
    text = text.replaceAll('넘', '련')
    let belittling = ["10련"]
    for (let i in belittling) {
        if (filter.비속어 && belittling[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":belittling[i]}
        }
    }
    newtext = text.replaceAll('련', '년')
    text = text.replaceAll('뇬', '년')
    text = text.replaceAll('놈', '년')
    text = text.replaceAll('넘', '년')
    text = text.replaceAll('러운지', '')
    text = text.replaceAll('려운지', '')
    text = text.replaceAll('무서운지', '')
    text = text.replaceAll('라운지', '')
    text = text.replaceAll('운지법', '')
    text = text.replaceAll('싸운지', '')
    text = text.replaceAll('운 지린다', '')
    text = text.replaceAll('깔보다', '')
    text = text.replaceAll('깔보시', '')
    text = text.replaceAll('1년', '')
    text = text.replaceAll('2년', '')
    text = text.replaceAll('3년', '')
    text = text.replaceAll('4년', '')
    text = text.replaceAll('5년', '')
    text = text.replaceAll('6년', '')
    text = text.replaceAll('7년', '')
    text = text.replaceAll('8년', '')
    text = text.replaceAll('9년', '')
    text = text.replaceAll('0년', '')
    text = text.replaceAll(/[^가-힣]/g, "")
    belittling = ["따까리", "장애년", "찐따년", "싸가지", "창년", "썅년", "버러지", "고아년", "고아년", "개간년", "종간나", "도구년", "걸래년", "썅년", "씹년",
                    "창녀", "머저리", "씹쓰래기", "씹쓰레기", "씹장생", "씹자식", "운지", "급식충", "틀딱충", "조센징", "매국노", "똥꼬충", "진지충", "듣보잡",
                    "한남충", "정신병자", "중생아", "돌팔이", "김치녀", "폰팔이", "틀딱년", "같은년", "개돼중", "쓰글년", "썩을년", "썩글년", "씹할", "거지새끼", "거지쉐뀌",
                    "거지쉑이", "거지쎄끼", "거지쒜리", "걸래가튼", "걸래넘", "걸래년", "걸래놈", "걸레가튼", "걸레년", "그지새끼", "그지새키", "그지색", "기집년", "까진년",
                    "깔보", "난잡년", "빡대가리", "더러운년", "돌아이", "또라이", "장애려", "샹놈", "김치남", "김치녀", "혜지련", "한유남충", "페미나치", "페미년", "꼴페미"]
    for (let i in belittling) {
        if (filter.비속어 && belittling[i].includes(text) && text) {
            return {"result":true,"reason":"비속어","discovered":belittling[i]}
        }
    }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('흑형님', '')
    let nigger = ["깜둥이", "흑형", "조센진", "짱개", "짱깨",
                "짱께", "짱게", "쪽바리", "쪽파리", "빨갱이", "쪽바리", "니그로", "코쟁이", "칭총", "칭챙총", "섬숭이", "왜놈", "짱꼴라", "짱깨", "섬짱깨"]
    for (let i in nigger) {
        if (filter.인종발언 && nigger[i].includes(text) && text) {
            return {"result":true,"reason":"인종발언","discovered":nigger[i]}
        }
    }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    let your = ["ㄴ1ㄱ", "ㄴ1ㅁ", "느금ㅁ", "ㄴㄱ마", "ㄴㄱ빠", "ㄴ금빠", "ㅇH미", "ㄴ1에미", "늬애미"]
    for (let i in your) {
        if (filter.패드립 && your[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"패드립","discovered":your[i]}
        }
    }
    text = newtext.replaceAll(/[^ㄱ-힣]/g, "")
    text = text.replaceAll('ㄴㄴ', '')
    text = text.replaceAll('미국', '')
    your = ["ㄴㄱㅁ", "ㄴ금마", "느금ㅁ", "ㄴㄱ마", "ㄴㄱ빠", "ㄴ금빠", "ㄴ미", "늬금마"]
    for (let i in your) {
        if (filter.패드립 && your[i].includes(text) && text) {
            return {"result":true,"reason":"패드립","discovered":your[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('엄창못', '')
    text = text.replaceAll('l', 'ㅣ')
    text = text.replaceAll('1', 'ㅣ')
    text = text.replaceAll('ㄴㅣ', '니')
    text = text.replaceAll('ㅇㅣ-ㅣ', '애')
    text = text.replaceAll('ㅁㅣ', '미')
    your = ["느금마", "느그엄마", "늑엄마", "늑금마", "느그애미", "넉엄마", "느그부모", "느그애비", "느금빠", "느그메", "느그빠", "니미씨", "니미씹",
            "느그마", "니엄마", "엄창", "엠창", "니미럴", "누굼마", "느금", "내미랄", "내미럴", "엄마없는", "아빠없는", "노에미"]
    for (let i in your) {
        if (filter.패드립 && your[i].includes(text) && text) {
            return {"result":true,"reason":"패드립","discovered":your[i]}
        }
    }
    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll("도", "")
    let motherfuck = ["니애미", "노애미", "노앰", "앰뒤련", "애믿쥐",
                    "아버지도없는게", "애미도없는게", "애비도없는게", "어머니도없는게", "엄마없네", "니애비", "노애비", "애미없", "애비없", "애미뒤", "애비뒤", "니아빠", "너에미", "눼기미", "뉘귀미", "뉘기미", "뉘김이", "뉘뮈", "뉘미랄", "뉘미럴", "뉘미롤", "뉘밀얼", "뉘밀할", "뉘어미", "뉘에미", "느검마", "늬긔미", "늬기미", "니기미", "니믜창", "니미랄", "니미럴", "니미쒸블", "니미씨펄넘", "니미좃", "니밀할", "니부랑", "니뽕좃", "애미죽"]
    for (let i in motherfuck) {
        if (filter.패드립 && motherfuck[i].includes(text) && text) {
            return {"result":true,"reason":"패드립","discovered":motherfuck[i]}
        }
    }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    text = newtext.replaceAll("```css", "")
    text = text.replaceAll("ex\)", "")
    text = text.replaceAll("\*", "")
    //censored_text = profanity.censor(text, '▩')
    //if ('▩'.includes(censored_text)) {
    //    return {"result":true,"reason":""}
    //}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    let mh = ["노시개", "노알라", "뇌사모", "뇌물현", "응디시티"]
    for (let i in mh) {
        if (filter.정치 && mh[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"정치","discovered":mh[i]}
        }
    }

    let ji = ["귀걸이아빠", "달창", "대깨문", "문재앙", "문죄앙", "문죄인", "문크예거", "훠훠훠", "문빠"]
    for (let i in ji) {
        if (filter.정치 && ji[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"정치","discovered":ji[i]}
        }
    }

    let gh = ["근혜어", "길라임", "나대블츠", "닭근혜", "댓통령", "레이디가카",
            "바쁜벌꿀", "수첩공주", "유신공주", "유체이탈화법", "칠푼이", "쿼터갓"]
    for (let i in gh) {
        if (filter.정치 && gh[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"정치","discovered":gh[i]}
        }
    }

    let jh = ["반인반신", "데미갓", "박정희"]
    for (let i in jh) {
        if (filter.정치 && jh[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"정치","discovered":jh[i]}
        }
    }

    let cs = ["간철수"]
    for (let i in cs) {
        if (filter.정치 && cs[i].includes(newtext) && newtext) {
            return {"result":true,"reason":"정치","discovered":cs[i]}
        }
    }

    text = newtext.replaceAll(/[^가-힣]/g, "")
    text = text.replaceAll('카카오톡', '')
    text = text.replaceAll('카톡', '')
    text = text.replaceAll('카페', '')
    text = text.replaceAll('하다가', '')
    text = text.replaceAll('먹다가', '')
    text = text.replaceAll('카와이', '')
    text = text.replaceAll('카츠', '')
    text = text.replaceAll('카레', '')
    text = text.replaceAll('니가', '')
    text = text.replaceAll('내가', '')
    text = text.replaceAll('너가', '')
    text = text.replaceAll('우리가', '')
    text = text.replaceAll('너희가', '')
    text = text.replaceAll('카카오', '')
    text = text.replaceAll('너희가', '')
    text = text.replaceAll('카세트', '')
    text = text.replaceAll('카플레이어', '')
    text = text.replaceAll('카운터', '')
    text = text.replaceAll('카정', '')
    text = text.replaceAll('카드', '')
    let mb = ["가카", "이명박근혜", "다스는누구겁니까"]
    for (let i in mb) {
        if (filter.정치 && mb[i].includes(text) && text) {
            return {"result":true,"reason":"정치","discovered":mb[i]}
        }
    }
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ADDING
    //text = text.replaceAll('', '')
    sex = ["헤으응","헤응","하앙","흐앙"]
    for (let i in sex) {
        if (filter.성적발언 && sex[i].includes(text) && text) {
            return {"result":true,"reason":"성적발언","discovered":sex[i]}
        }
    }
    return {"result":false,"reason":"none","discovered":"none"}
}
// -> 비속어 | 성적발언  | 인종발언 | 패드립 | 정치 | none


const check_english = (text) => {
    text = text.replaceAll('𝗌', 's')
    text = text.replaceAll('𝘴', 's')
    text = text.replaceAll('𝙨', 's')
    text = text.replaceAll('𝚜', 's')
    text = text.replaceAll('𝐬', 's')
    text = text.replaceAll('𝑠', 's')
    text = text.replaceAll('𝒔', 's')
    text = text.replaceAll('𝓈', 's')
    text = text.replaceAll('𝓼', 's')
    text = text.replaceAll('𝔰', 's')
    text = text.replaceAll('𝖘', 's')
    text = text.replaceAll('𝕤', 's')
    text = text.replaceAll('ｓ', 's')
    text = text.replaceAll('ş', 's')
    text = text.replaceAll('ⓢ', 's')
    text = text.replaceAll('⒮', 's')
    text = text.replaceAll('🅢', 's')
    text = text.replaceAll('🆂', 's')
    text = text.replaceAll('🅂', 's')
    text = text.replaceAll('𝖾', 'e')
    text = text.replaceAll('𝘦', 'e')
    text = text.replaceAll('𝙚', 'e')
    text = text.replaceAll('𝚎', 'e')
    text = text.replaceAll('𝐞', 'e')
    text = text.replaceAll('𝑒', 'e')
    text = text.replaceAll('𝒆', 'e')
    text = text.replaceAll('ℯ', 'e')
    text = text.replaceAll('𝓮', 'e')
    text = text.replaceAll('𝔢', 'e')
    text = text.replaceAll('𝖊', 'e')
    text = text.replaceAll('𝕖', 'e')
    text = text.replaceAll('ｅ', 'e')
    text = text.replaceAll('ė', 'e')
    text = text.replaceAll('ⓔ', 'e')
    text = text.replaceAll('⒠', 'e')
    text = text.replaceAll('🅔', 'e')
    text = text.replaceAll('🅴', 'e')
    text = text.replaceAll('🄴', 'e')
    text = text.replaceAll('є', 'e')
    text = text.replaceAll('𝗑', 'x')
    text = text.replaceAll('𝘹', 'x')
    text = text.replaceAll('𝙭', 'x')
    text = text.replaceAll('𝚡', 'x')
    text = text.replaceAll('𝐱', 'x')
    text = text.replaceAll('𝑥', 'x')
    text = text.replaceAll('𝒙', 'x')
    text = text.replaceAll('𝓍', 'x')
    text = text.replaceAll('𝔁', 'x')
    text = text.replaceAll('𝔵', 'x')
    text = text.replaceAll('𝖝', 'x')
    text = text.replaceAll('𝕩', 'x')
    text = text.replaceAll('ｘ', 'x')
    text = text.replaceAll('ⓧ', 'x')
    text = text.replaceAll('⒳', 'x')
    text = text.replaceAll('🅧', 'x')
    text = text.replaceAll('🆇', 'x')
    text = text.replaceAll('🅇', 'x')
    text = text.replaceAll('₨', 'rs')
    text = text.replaceAll('ų', 'u')
    text = text.replaceAll('ç', 'c')
    text = text.replaceAll('Ｆ', 'F')
    text = text.replaceAll('Ｋ', 'K')
    text = text.replaceAll('Ｃ', 'C')
    text = text.replaceAll('Ｕ', 'U')
    // korcen.ts && change
    const cl = [
        , 'ball gravy', 'ball licking', 'ball sack', 'ball sucking', 'ballbag', 'ballsack', 'bampot', "bang (one's) box", 'bangbros', 'barely legal'
        , 'barenaked', 'barf', 'bastard', 'bastardo', 'bastards', 'bastinado', 'batty boy', 'bdsm', 'beaner', 'beaners', 'beardedclam', 'beastial'
        , 'beastiality', 'beatch', 'beaver cleaver', 'beaver lips', 'beef curtain', 'beef curtains', 'beeyotch', 'bellend', 'beotch', 'bescumber'
        , 'bestial', 'bestiality', 'bi+ch', 'biatch', 'big knockers', 'big tits', 'bigtits', 'bimbo', 'bimbos', 'bint', 'birdlock', 'bitch', 'bitch tit'
        , 'bitchass', 'bitched', 'bitcher', 'bitchers', 'bitches', 'bitchin', 'bitching', 'bitchtits', 'bitchy', 'black cock', 'bloodclaat', 'blow job'
        , 'blow me', 'blow mud', 'blow your load', 'blowjob', 'blowjobs', 'blue waffle', 'blue waffle', 'blumpkin', 'boiolas', 'bollock', 'bollocks'
        , 'bollok', 'bollox', 'bondage', 'boned', 'boner', 'boners', 'bong', 'boob', 'boobies', 'boobs', 'booby', 'booger', 'boong', 'booobs', 'boooobs'
        , 'booooobs', 'booooooobs', 'bootee', 'bootie', 'booty call', 'booze', 'boozer', 'boozy', 'bosom', 'bosomy', 'breasts', 'brotherfucker'
        , 'brown showers', 'buceta', 'bugger', 'bull shit', 'bulldyke', 'bullet vibe', 'bullshit', 'bullshits', 'bullshitted', 'bullturds', 'bumblefuck'
        , 'bumclat', 'bummer', 'bung', 'bung hole', 'bunghole', 'bunny fucker', 'bust a load', 'busty', 'butt fuck', 'butt plug', 'buttcheeks', 'buttfuck'
        , 'buttfucka', 'buttfucker', 'buttmuch', 'buttmunch', 'butt-pirate', 'buttplug', 'c.0.c.k', 'c.o.c.k.', 'c.u.n.t', 'c0ck', 'c-0-c-k', 'c0cksucker'
        , 'camel toe', 'cameltoe', 'camgirl', 'camslut', 'camwhore', 'carpet muncher', 'carpetmuncher', 'cawk', 'chesticle', 'chi-chi man'
        , 'chick with a dick', 'child-fucker', 'chinc', 'chincs', 'chink', 'chinky', 'choad', 'choade', 'choade', 'choc ice', 'chocolate rosebuds'
        , 'chode', 'chodes', 'chota bags', 'chota bags', 'cipa', 'circlejerk', 'cl1t', 'cleveland steamer', 'clit', 'clit licker', 'clitface', 'clitfuck'
        , 'clitorus', 'clits', 'clitty', 'clitty litter', 'clover clamps', 'clunge', 'clusterfuck', 'cnut', 'c-o-c-k', 'cock pocket', 'cock snot'
        , 'cock sucker', 'cockass', 'cockbite', 'cockblock', 'cockburger', 'cockeye', 'cockface', 'cockfucker', 'cockhead', 'cockholster', 'cockjockey'
        , 'cockknocker', 'cockknoker', 'cocklump', 'cockmaster', 'cockmongler', 'cockmongruel', 'cockmonkey', 'cockmunch', 'cockmuncher', 'cocknose'
        , 'cocknugget', 'cockshit', 'cocksmith', 'cocksmoke', 'cocksmoker', 'cocksniffer', 'cocksuck', 'cocksuck', 'cocksucked', 'cocksucked', 'cocksucker'
        , 'cock-sucker', 'cocksuckers', 'cocksucking', 'cocksucks', 'cocksucks', 'cocksuka', 'cocksukka', 'cockwaffle', 'coital', 'cokmuncher', 'coksucka'
        , 'commie', 'coochie', 'coochy', 'coon', 'coonnass', 'coons', 'cooter', 'cop some wood', 'coprolagnia', 'coprophilia', 'corksucker', 'cornhole'
        , 'cornhole', 'corp whore', 'corp whore', 'crackwhore', 'crap', 'crappy', 'cretin', 'crikey', 'cripple', 'crotte', 'cunilingus'
        , 'cunillingus', 'cunnie', 'cunnilingus', 'cunny', 'cunt', 'c-u-n-t', 'cunt hair', 'cunt hair', 'cuntass', 'cuntbag', 'cuntbag', 'cuntface'
        , 'cunthole', 'cunthunter', 'cuntlick', 'cuntlick', 'cuntlicker', 'cuntlicker', 'cuntlicking', 'cuntlicking', 'cuntrag', 'cunts', 'cuntsicle'
        , 'cuntsicle', 'cuntslut', 'cunt-struck', 'cunt-struck', 'cyalis', 'cyberfuc', 'cyberfuck', 'cyberfuck', 'cyberfucked', 'cyberfucked'
        , 'cyberfucker', 'cyberfuckers', 'cyberfucking', 'cyberfucking', 'd0ng', 'd0uch3', 'd0uche', 'd1ck', 'd1ld0', 'd1ldo', 'dammit', 'date rape'
        , 'daterape', 'dawgie-style', 'deep throat', 'deepthroat', 'dendrophilia', 'dolcett', 'dominatrix', 'dommes', 'donkey punch', 'donkeypunch'
        , 'donkeyribber', 'doochbag', 'doofus', 'dookie', 'doosh', 'dopey', 'double dong', 'double penetration', 'douch3', 'douche', 'douchebag'
        , 'douchebags', 'douche-fag', 'douchewaffle', 'douchey', 'dp action', 'dry hump', 'dumass', 'dumb ass', 'dumbass', 'dumbasses', 'dumbcunt'
        , 'dumbfuck', 'dumbshit', 'dumshit', 'ejaculate', 'ejaculated'
        , 'ejaculates', 'ejaculates', 'ejaculating', 'ejaculating', 'ejaculatings', 'ejaculation', 'ejakulate', 'erect', 'erection', 'erotic', 'erotism'
        , 'escort', 'essohbee', 'extacy', 'extasy', 'f4nny', 'fack', 'fagbag', 'fagfucker', 'fagg'
        , 'fagged', 'fagging', 'faggit', 'faggitt', 'faggot', 'faggotcock', 'faggots', 'faggs', 'fagot', 'fagots', 'fags', 'fagtard', 'faig', 'faigt'
        , 'fannybandit', 'fannyflaps', 'fannyfucker', 'fanyy', 'fartknocker', 'fatass', 'fcuk', 'fcuker', 'fcuking', 'fecal', 'felch', 'felcher'
        , 'felching', 'fellate', 'fellatio', 'feltch', 'feltcher', 'female squirting', 'femdom', 'fenian', 'fingerbang', 'fingerfuck', 'fingerfuck'
        , 'fingerfucked', 'fingerfucked', 'fingerfucker', 'fingerfucker', 'fingerfuckers', 'fingerfucking', 'fingerfucking', 'fingerfucks'
        , 'fingerfucks', 'fist fuck', 'fist fuck', 'fisted', 'fistfuck', 'fistfucked', 'fistfucked', 'fistfucker', 'fistfucker', 'fistfuckers'
        , 'fistfuckers', 'fistfucking', 'fistfucking', 'fistfuckings', 'fistfuckings', 'fistfucks', 'fistfucks', 'fisting', 'fisty', 'fleshflute'
        , 'flog the log', 'floozy', 'foad', 'fondle', 'fooker', 'foot fetish', 'footjob', 'foreskin', 'frotting', 'fubar'
        , 'how to murdep', 'how to murder', 'humped', 'humping', 'iberian slap'
        , 'inbred', 'incest', 'intercourse', 'kafir', 'kike', 'kikes', 'kinbaku', 'kinkster', 'knobead', 'knobed', 'knobend'
        , 'knobhead', 'knobjocky', 'knobjokey', 'kooch', 'kooches', 'kootch', 'kunilingus', 'kunt', 'kwif', 'kyke', 'l3i+ch', 'l3itch', 'labia', 'lameass'
        , 'lardass', 'leather restraint', 'leather straight jacket', 'lemon party', 'leper', 'lezza', 'lezzie', 'lolita', 'lovemaking', 'lube', 'm0f0'
        , 'm0fo', 'm45terbate', 'ma5terb8', 'ma5terbate', 'mafugly', 'mafugly', 'make me come', 'male squirting', 'masterb8', 'masterbat*', 'masterbat3'
        , 'masterbate', 'master-bate', 'master-bate', 'masterbating', 'masterbation', 'masterbations', 'masturbate', 'masturbating', 'masturbation', 'mcfagget'
        , 'menage a trois', 'meth', 'm-fucking', 'microphallus', 'milf', 'missionary position', 'mof0', 'mofo', 'mo-fo', 'molest', 'moolie', 'moron'
        , 'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked', 'mothafucked', 'mothafucker', 'mothafuckers', 'mothafuckin', 'mothafucking'
        , 'mothafucking', 'mothafuckings', 'mothafucks', 'mother fucker', 'mother fucker', 'motherfuck', 'motherfucka', 'motherfucked', 'motherfucker'
        , 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks', 'mound of venus', 'muff diver', 'muff puff'
        , 'muff puff', 'muffdiver', 'muffdiving', 'murder', 'mutha', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'n1gga', 'n1gger', 'nambla'
        , 'nawashi', 'need the dick', 'negro', 'nig nog', 'nigaboo', 'nigg3r', 'nigg4h', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'niggers'
        , 'niglet', 'nig-nog', 'nimphomania', 'nob jokey', 'nobhead', 'nobjocky', 'nobjokey', 'nonce', 'nsfw images', 'nude', 'nudity', 'numbnuts'
        , 'nut sack', 'nutsack', 'nympho', 'nymphomania', 'octopussy', 'omorashi', 'one cup two girls', 'one guy one jar', 'opiate', 'opium', 'orgasim'
        , 'orgasims', 'orgasm', 'orgasmic', 'orgasms', 'orgies', 'orgy', 'p0rn', 'paedophile', 'paki', 'peckerhead', 'pedobear', 'pedophile'
        , 'pedophilia', 'pedophiliac', 'peepee', 'pegging', 'penial', 'penile', 'penis', 'penisbanger', 'penisfucker', 'penispuffer', 'phallic'
        , 'phone sex', 'phonesex', 'phuck', 'phuk', 'phuked', 'phuking', 'phukked', 'phukking', 'phuks', 'phuq', 'piece of shit', 'pigfucker', 'pillowbiter'
        , 'pimp', 'pimpis', 'piss pig', 'pissflaps', 'pisspig', 'pleasure chest', 'polack', 'pole smoker', 'polesmoker', 'pollock', 'ponyplay', 'poof'
        , 'poon', 'poonani', 'poonany', 'poontang', 'poop chute', 'poopchute', 'poopuncher', 'porch monkey', 'porchmonkey', 'porn', 'porno', 'pornography'
        , 'pornos', 'potty', 'prick', 'pricks', 'prickteaser', 'prig', 'prince albert piercing', 'pron', 'prostitute', 'pthc', 'pube', 'pubes', 'pubic'
        , 'pubis', 'punani', 'punanny', 'punany', 'queaf', 'queaf', 'queef', 'queerbait', 'queerhole', 'queero', 'quim', 'raghead', 'raging boner', 'rape'
        , 'raped', 'raper', 'rapey', 'raping', 'rapist', 'raunch', 'reetard', 'renob', 'retard', 'retarded', 'reverse cowgirl', 'rimjaw', 'rimjob', 'rimming'
        , 'ritard', 'rosy palm', 'rosy palm and her 5 sisters', 'rtard', 'r-tard', 'rusty trombone', 's hit', 's.h.i.t.', 's.o.b.', 's_h_i_t', 'sadism'
        , 'sadist', 'sand nigger', 'sandnigger', 'sausage queen', 'schizo', 'schlong', 'scissoring', 'scroat', 'scrog', 'scrot', 'scrote', 'scum', 'seks'
        , 'semen', 'sexo', 'sh!+', 'sh!t', 'sh1t', 's-h-1-t', 'shag', 'shagger', 'shaggin', 'shagging', 'shaved beaver', 'shaved pussy', 'shemale', 'shi+'
        , 'shibari', 'shit', 's-h-i-t', 'shit ass', 'shit fucker', 'shit fucker', 'shitass', 'shitbag', 'shitbagger', 'shitblimp', 'shitbrains', 'shitbreath'
        , 'shitcanned', 'shitcunt', 'shitdick', 'shite', 'shiteater', 'shited', 'shitey', 'shitface', 'shitfaced', 'shitfuck', 'shitfull', 'shithead'
        , 'shitheads', 'shithole', 'shithouse', 'shiting', 'shitings', 'shits', 'shitspitter', 'shitstain', 'shitt', 'shitted', 'shitter', 'shitters'
        , 'shitters', 'shittier', 'shittiest', 'shitting', 'shittings', 'shitty', 'shiz', 'shiznit', 'shota', 'skullfuck', 'slanteye', 'slave', 'slut'
        , 'slut bucket', 'slut bucket', 'slutbag', 'slutdumper', 'slutkiss', 'sluts', 'smut', 'smutty', 'snuff', 's-o-b', 'sod off', 'sodomize', 'sodomy'
        , 'son of a bitch', 'son of a motherless goat', 'son of a whore', 'son-of-a-bitch', 'splooge', 'splooge moose', 'spooge', 'spook', 'spread legs'
        , 'spunk', 'stfu', 'stiffy', 'stoned', 'strap on', 'strapon', 'strappado', 'strip club', 'style doggy', 'suckass', 'suicide girls', 'sultry women'
        , 'sumofabiatch', 't1tt1e5', 't1tties', 'taff', 'taig', 'taking the piss', 'tard', 'tea bagging', 'teabagging', 'teat', 'teets', 'teez', 'teste'
        , 'testee', 'testes', 'testical', 'testicle', 'testis', 'threesome', 'throating', 'thundercunt', 'tit wank', 'tit wank', 'titfuck', 'titi', 'tities'
        , 'tits', 'titt', 'tittie5', 'tittiefucker', 'titties', 'titty', 'tittyfuck', 'tittyfucker', 'tittywank', 'titwank', 'tosser', 'towelhead', 'tramp'
        , 'tranny', 'tribadism', 'tub girl', 'tubgirl', 'turd', 'tush', 'tushy', 'tw4t', 'twat', 'twathead', 'twatlips', 'twats', 'twatty', 'twatwaffle'
        , 'two fingers', 'two fingers with tongue', 'two girls one cup', 'twunt', 'twunter', 'unclefucker', 'undies', 'undressing', 'upskirt', 'urethra play'
        , 'urophilia', 'v14gra', 'v1gra', 'vagina', 'vajayjay', 'va-j-j', 'venus mound', 'veqtable', 'violet wand', 'vixen', 'vjayjay', 'vorarephilia'
        , 'vulva', 'wang', 'wank', 'wanker', 'wankjob', 'wanky', 'wazoo', 'wet dream', 'wetback', 'wh0re', 'wh0reface', 'whore', 'whorealicious'
        , 'whorebag', 'whored', 'whoreface', 'whorehopper', 'whorehouse', 'whores', 'whoring', 'wigger', 'window licker', 'wrinkled starfish', 'yaoi'
        , 'yeasty', 'yellow showers', 'yobbo', 'zibbi', 'zoophilia', 'zubb'
    ] // -> 분류중...
    const sex = [
        '2 girls 1 cup', '2g1c', '4r5e', '5h1t', '5hit', 'a$$hole', 'a_s_s', 'a55hole', 'acrotomophilia', 'ahole', 'alabama hot pocket'
        , 'alaskan pipeline', 'anal', 'anal impaler', 'anal leakage', 'analprobe', 'anilingus', 'apeshit', 'ar5e', 'arrse', 'arse', 'arsehole', 'ass fuck'
        , 'ass hole', 'assbag', 'assbandit', 'assbang', 'assbanged', 'assbanger', 'assbangs', 'assbite', 'assclown', 'asscock', 'asscracker', 'asses'
        , 'assface', 'assfaces', 'assfuck', 'assfucker', 'ass-fucker', 'assfukka', 'assgoblin', 'assh0le', 'asshat', 'ass-hat', 'asshead', 'assho1e'
        , 'asshole', 'assholes', 'asshopper', 'ass-jabber', 'assjacker', 'asslick', 'asslicker', 'assmaster', 'assmonkey', 'assmucus', 'assmucus'
        , 'assmunch', 'assmuncher', 'assnigger', 'asspirate', 'ass-pirate', 'assshit', 'assshole', 'asssucker', 'asswad', 'asswhole', 'asswipe'
        , 'asswipes', 'auto erotic', 'autoerotic', 'axwound', 'azazel', 'b!tch', 'b00bs', 'b17ch', 'b1tch','baby batter', 'baby juice', 'ball gag'
        , 'yiffy', 'dick', 'dick head', 'dick hole', 'dick hole', 'dick shy', 'dick shy'
        , 'dickbag', 'dickbeaters', 'dickdipper', 'dickface', 'dickflipper', 'dickfuck', 'dickfucker', 'dickhead', 'dickheads', 'dickhole', 'dickish'
        , 'dick-ish', 'dickjuice', 'dickmilk', 'dickmonger', 'dickripper', 'dicks', 'dicksipper', 'dickslap', 'dick-sneeze', 'dicksucker', 'dicksucking'
        , 'dicktickler', 'dickwad', 'dickweasel', 'dickweed', 'dickwhipper', 'dickwod', 'dickzipper', 'dildo', 'dildos', 'diligaf', 'dingleberries'
        , 'dingleberry', 'dipship', 'dipshit', 'dirty pillows', 'dirty sanchez', 'dlck', 'dog style', 'dog-fucker', 'doggie style', 'doggiestyle'
        , 'doggie-style', 'doggin', 'dogging', 'doggy style', 'doggystyle', 'doggy-style', 'puss', 'pusse', 'pussi', 'pussies', 'pussy', 'pussy fart', 'pussy fart', 'pussy palace', 'pussy palace'
        , 'pussylicking', 'pussypounder', 'pussys', 'p.u.s.s.y.', 'cum chugger', 'cum chugger'
        , 'cum dumpster', 'cum dumpster', 'cum freak', 'cum freak', 'cum guzzler', 'cum guzzler', 'cumbubble', 'cumdump', 'cumdump', 'cumdumpster'
        , 'cumguzzler', 'cumjockey', 'cummer', 'cummin', 'cumming', 'cums', 'cumshot', 'cumshots', 'cumslut', 'cumstain', 'cumtart', 'gay sex', 'gayass', 'gaybob', 'gaydo', 'gayfuck', 'gayfuckist', 'gaysex', 'gaytard', 'gaywad', 'gender bender', 'giant cock'
        , 'gigolo', 'gippo', 'glans', 'goatcx', 'goatse', 'goddamn', 'goddamned', 'god-damned', 'goddamnit', 'godsdamn', 'gokkun', 'golden shower'
        , 'goldenshower', 'goo girl', 'goodpoop', 'gooks', 'goregasm', 'group sex', 'gspot', 'g-spot', 'gtfo', 'h0m0', 'h0mo', 'hand job', 'handjob'
        , 'hardcoresex', 'hentai', 'heroin', 'herpes', 'hobag', 'hoer', 'hom0', 'homodumbshit', 'homoerotic', 'homoey', 'honkey', 'honky', 'hooker'
        , 'hore', 'horniest', 'horny', 'hot carl', 'hot chick', 'hotsex',
        , 'fuck buttons', 'fuck hole', 'fuck hole', 'fuck off', 'fuck puppet', 'fuck puppet', 'fuck trophy', 'fuck trophy', 'fuck yo mama'
        , 'fuck yo mama', 'fuck you', 'fucka', 'fuckass', 'fuck-ass', 'fuck-ass', 'fuckbag', 'fuck-bitch', 'fuck-bitch', 'fuckboy', 'fuckbrain'
        , 'fuckbutt', 'fuckbutter', 'fucked', 'fuckedup', 'fucker', 'fuckers', 'fuckersucker', 'fuckface', 'fuckhead', 'fuckheads', 'fuckhole'
        , 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme', 'fuckme', 'fuckmeat', 'fuckmeat', 'fucknugget', 'fucknut', 'fucknutt'
        , 'fuckoff', 'fucks', 'fuckstick', 'fucktard', 'fuck-tard', 'fucktards', 'fucktart', 'fucktoy', 'fucktoy', 'fucktwat', 'fuckwad'
        , 'fuckwhit', 'fuckwit', 'fuckwitt', 'fudge packer', 'fudgepacker', 'fudge-packer', 'fuker', 'fukker', 'fukkers', 'fukkin', 'fuks', 'fukwhit'
        , 'fukwit', 'futanari', 'fux0r', 'fvck', 'fxck', 'gang bang', 'gangbang', 'gang-bang', 'gang-bang', 'gangbanged', 'gangbangs', 'gassy ass'
        , 'eat a dick', 'eat a dick', 'eat hair pie', 'eat hair pie', 'eat my ass', 'gassy ass', 'jack off', 'jackass'
        , 'jackasses', 'jackhole', 'jackoff', 'jack-off', 'jail bait', 'jailbait', 'japs'
        , 'jerk', 'jerk off', 'jerk0ff', 'jerkass', 'jerked', 'jerkoff', 'jerk-off', 'jigaboo', 'jiggaboo', 'jiggerboo', 'jism', 'jizm', 'jizm', 'jizz'
        , 'jizzed', 'jock', 'juggs', 'jungle bunny', 'junglebunny'
    ] // -> 성적발언
    const fuck = [
        'f u c k', 'f u c k e r', 'f.u.c.k', 'f_u_c_k', 'fuxx', 'fuck', 'fuck', 'f-u-c-k', 'fuckup'
    ] // -> 비속어
    for (let i in cl) {
        if (cl[i].includes(text) && text) {
            return {"result":true,"reason":"unknown","discovered":cl[i]}
        }
    }
    for (let i in sex) {
        if (sex[i].includes(text) && text) {
            return {"result":true,"reason":"unknown","discovered":sex[i]}  // 분류전까지 unknown
        }
    }
    for (let i in fuck) {
        if (fuck[i].includes(text) && text) {
            return {"result":true,"reason":"unknown","discovered":fuck[i]} // 분류전까지 unknown
        }
    }
    return {"result":false,"reason":"none","discovered":"none"}
}
// -> unknown | none

const check_total = (text) => {
    const kor = check_korean(text)
    if (kor.result) {
        return kor
    }
    const eng = check_english(text)
    if (eng.result) {
        return eng
    }
    return {"result":false,"reason":"none","discovered":"none"}
}
// -> 비속어 | 성적발언  | 인종발언 | 패드립 | 정치 | unknown | none

module.exports = {
    check_korean:check_korean,
    check_english:check_english,
    check_total:check_total,
    info:info
}