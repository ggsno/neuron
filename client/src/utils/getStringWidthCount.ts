/**
 * 한글의 폭을 고려한 글자 수(너비) 카운트
 * 영문은 (글자 수) * 1
 * 한글은 (글자 수) * 2
 */
export default function getStringWidthCount(str: string) {
  const strArray = [...str];

  // 각 문자의 길이를 확인하여 합산
  const lengthConsideringKorean = strArray.reduce((acc, char) => {
    // 유니코드 코드 포인트를 확인
    const codePoint = char.codePointAt(0) as number;

    // 한글 범위(가 ~ 힣)에 속하는 경우 2를 더함
    if (
      (codePoint >= 0xac00 && codePoint <= 0xd7a3) ||
      (codePoint >= 0x3131 && codePoint <= 0x3163)
    ) {
      return acc + 2;
    } else {
      return acc + 1;
    }
  }, 0);

  return lengthConsideringKorean;
}
