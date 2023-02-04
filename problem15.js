function paperRequirements(book1Quantity, book2Quantity, book3Quantity){
    const firstBookPaperNeed = 100;
    const secondBookPaperNeed = 200;
    const thirdBookPaperNeed = 300;
    const firstBookTotalPaperNeed = firstBookPaperNeed * book1Quantity;
    const secondBookTotalPaperNeed = secondBookPaperNeed * book2Quantity;
    const thirdBookTotalPaperNeed = thirdBookPaperNeed * book3Quantity;
    const totalPapers = firstBookTotalPaperNeed + secondBookTotalPaperNeed + thirdBookTotalPaperNeed;
    return totalPapers;
}
const totalPaper = paperRequirements(20, 3, 1);
console.log(totalPaper);
