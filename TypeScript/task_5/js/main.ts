interface MajorCredits {
    _brand: 'major'
    credits: number
}

interface MinorCredits {
    _brand: 'minor';
    credits: number
}

function sumMajorCredits(subject1: MajorCredits, subject2:MinorCredits) {
    return {
        credits: subject1.credits + subject2.credits
    } as MajorCredits;
}

function sumMinorCredits(subject1:MinorCredits, subject2: MajorCredits) {
    return {
        credits: subject1.credits + subject2.credits
    } as MinorCredits;
}