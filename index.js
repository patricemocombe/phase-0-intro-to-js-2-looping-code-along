function writeCards(friends, holiday){
    let thankYouCards = []
    for (let i = 0; i < friends.length; i++){
        thankYouCards.push(`Thank you, ${friends[i]}, for the wonderful ${holiday} gift!`)
       
    }


    return thankYouCards
};
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown (countdown) {
    while (countdown > 0) {
    console.log(countdown--);
};
    console.log(countdown);
}
countDown(15);
