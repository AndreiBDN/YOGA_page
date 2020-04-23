window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tabsHeader = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabs = document.querySelectorAll('.info-tabcontent');

    function hideTabs(a) {
        for (let i = a; i < tabs.length; i++) {

            tabs[i].classList.remove('show');
            tabs[i].classList.add('hide');
        }
    };
    hideTabs(1);

    function showTab(b) {
        if (tabs[b].classList.contains('hide')) {
            tabs[b].classList.remove('hide');
            tabs[b].classList.add('show');

        }
    }

    tabsHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabs(0);
                    showTab(i);
                    break;
                }
            }
        }

    });

    // TIMER
    let deadLine = '2020-04-23';

    function getTime(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60)) / 24),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60 % 60)),
            seconds = Math.floor((t / 1000 % 60));

        return {
            'totalTime': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTimer(id, endTime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateTimer, 1000);

        function updateTimer() {
            let t = getTime(endTime);

            function addNull(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }
            days.textContent = addNull(t.days);

            hours.textContent = addNull(t.hours);

            minutes.textContent = addNull(t.minutes);

            seconds.textContent = addNull(t.seconds);

            if (t.totalTime <= 0) {
                clearInterval(timeInterval);

                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setTimer('timer', deadLine);

    // MODAL

    let more = document.querySelector('.more'),
        modal = document.querySelector('.overlay'),
        popUp = document.querySelector('.popup'),
        closeModal = document.querySelector('.popup-close'),
        info = document.querySelector('.info');

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('description-btn')) {
            showModal();
        }
    });

    function showModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModalWindow() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    closeModal.addEventListener('click', closeModalWindow);

    modal.addEventListener('click', closeModalWindow);
    popUp.addEventListener('click', event => {
        event.stopPropagation();
    });

});