function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const formData = new FormData(quizForm);
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'c',
        q4: 'd',
        q5: 'a',
        q6: 'b',
        q7: 'c',
        q8: 'd',
        q9: 'a',
        q10: 'b'
    };
    let score = 0;
    for (let [key, value] of formData.entries()) {
        if (value === answers[key]) {
            score++;
        }
    }
    const result = document.getElementById('result');
    const passingScore = 8;
    result.innerHTML = `Nilai Anda: ${score * 10}<br>Jawaban Benar: ${score}<br>Jawaban Salah: ${10 - score}<br>${score >= passingScore ? 'Selamat, Anda Lulus!' : 'Maaf, Anda Belum Lulus.'}`;
}
