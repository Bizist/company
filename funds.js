document.addEventListener('DOMContentLoaded', function () {
    const fundsTypeBtns = document.querySelectorAll('.funds-type-btn');
    const fundsTypeTables = document.querySelectorAll('.funds-type-table');

    fundsTypeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const target = this.getAttribute('data-target');

            fundsTypeBtns.forEach(function (btn) {
                btn.classList.remove('active');
            });

            fundsTypeTables.forEach(function (table) {
                table.classList.remove('active');
            });

            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});