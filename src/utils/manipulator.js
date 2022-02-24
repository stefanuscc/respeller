
export const numberSpeller = (n, custom_join_character, lang = "en") => {
    let json = require(`../lang/en.json`);
    try{
        json = require(`../lang/${lang}.json`);
    }catch(err){
        console.error('Language not found, using default language (en)');
    }

    let string = n.toString(),
        units, tens, scale, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    let and = custom_join_character ?? 'and';

    /* Is number zero? */
    if (parseInt(string) === 0) {
        return 'zero';
    }

    /* Array of units as words */
    units = json.units

    /* Array of tens as words */
    tens = json.tens

    /* Array of scales as words */
    scales = json.scales

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            /* Split chunk into array of individual integers */
            ints = chunks[i].split('').reverse().map(parseFloat);

            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            /* Add scale word if chunk is not zero and array item exists */
            if ((word = scales[i])) {
                /* Indo handler, call one as prefix if may */
                // console.log(word, ints)
                // if(ints[0] === 1 && ints[1] === 0 && ints[2] === 0 && ints.length > 1 && chunksLen > 1 && (scale = scales[ints[0]])){
                //     words.push(json.one + scale);
                // } else {
                words.push(word);
                // }
            }
            
            /* Add unit word if array item exists */
            if ((word = units[ints[0]])) {
                words.push(word);
            }

            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            /* Add 'and' string after units or tens integer if: */
            if (ints[0] || ints[1]) {

                /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                if ((ints[2] || !i && chunksLen > 1) && custom_join_character !== false) {
                    words.push(and);
                }

            }

            /* Add hundreds word if array item exists */
            if ((word = units[ints[2]])) {
                word = ints[2] === 1 ? json.one : word + ' ';
                words.push(word + json.hundred);
            }

        }

    }

    return words.reverse().join(' ');
}