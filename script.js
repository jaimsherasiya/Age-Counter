document.getElementById('age-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const day = parseInt(document.getElementById('dob-day').value, 10);
    const month = parseInt(document.getElementById('dob-month').value, 10);
    const year = parseInt(document.getElementById('dob-year').value, 10);

    if (!day || !month || !year) return;

    const dob = new Date(year, month, day);
    if (isNaN(dob)) return;

    const now = new Date();
    const diff = now - dob;
    const ageDate = new Date(diff);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    const totalWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diff / (1000 * 60));

    const nextBirthday = new Date(dob);
    nextBirthday.setFullYear(now.getFullYear());
    if (now > nextBirthday) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }

    const timeToNextBirthday = nextBirthday - now;
    const daysToNextBirthday = Math.ceil(timeToNextBirthday / (1000 * 60 * 60 * 24));
    const nextBirthdayMonth = nextBirthday.toLocaleString('default', { month: 'long' });
    const nextBirthdayDay = nextBirthday.getDate();
    const nextBirthdayDayName = nextBirthday.toLocaleString('default', { weekday: 'long' });

    document.getElementById('age-years').textContent = `${years} years`;
    document.getElementById('age-details').textContent = `${months} months | ${days} days`;

    document.getElementById('next-birthday-date').textContent = `${nextBirthdayDayName}, ${nextBirthdayMonth} ${nextBirthdayDay}`;
    document.getElementById('next-birthday-details').textContent = `${Math.floor(daysToNextBirthday / 30)} month | ${daysToNextBirthday % 30} days`;

    document.getElementById('summary-years').textContent = `Years: ${years}`;
    document.getElementById('summary-months').textContent = `Months: ${years * 12 + months}`;
    document.getElementById('summary-weeks').textContent = `Weeks: ${totalWeeks}`;
    document.getElementById('summary-days').textContent = `Days: ${totalDays}`;
    document.getElementById('summary-hours').textContent = `Hours: ${totalHours}`;
    document.getElementById('summary-minutes').textContent = `Minutes: ${totalMinutes}`;

    document.querySelector('.result').style.display = 'block';
});
