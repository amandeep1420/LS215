// 1

// /\bb[a-z]*e\b/  correct

// 2

// .*\? incorrect - need anchors ----> ^.*\?$

// 3

// ^.+\?$ correct

// 4

// ^http(s)?.* very incorrect ----> /^https?:\/\/\S*$/

// 5

// did it

// 6

// \bhttps?:\/\/\S* correct

// 7

// /\b[a-z]*i[a-z]*i[a-z]*i[a-z]*\b/i correct, but
// this is better: /\b([a-z]*i){3,}[a-z]*\b/

// 8

// \b\S{2,}$ ---> it works, but it depends on how you interpret the prompt

// 9

// ^(,\d+){3,6},$  it works

// 10
// skipped a number somewhere

// 11

// ^((\d+,){2}\d+|(\d+,){5,}\d+)$ ---> they made part of the pattern optional
// using this: /^(\d+,){2}((\d+,){3,})?\d+$/

// 12
// <h1>.*?<\/h1> correct, used lazy quanitifier