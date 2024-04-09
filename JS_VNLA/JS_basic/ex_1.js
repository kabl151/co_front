function 삼육구게임(입력) {
    var 숫자 = 입력;
    if (숫자 % 3 != 0){
        console.log('박수치지마셈');
    } else {
        if (숫자 % 9 == 0){
            console.log('박수 두번 치셈');
        }else{
            console.log('박수치셈');
        }
    }
}

삼육구게임(123);