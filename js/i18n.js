/*!
 * Site i18n (en / fa)
 */
(function () {
    const STORAGE_KEY = 'site-lang';

    const translations = {
        en: {
            'meta.title': 'Resume - Alireza Hoseini',
            'nav.toggle': 'Toggle navigation',
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.interests': 'Interests',
            'nav.awards': 'Awards',
            'lang.label': 'Language',
            'about.subheading': "Bachelor's in Computer Engineering · DevOps",
            'about.lead':
                'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
            'experience.title': 'Experience',
            'experience.job1.title': 'Senior Web Developer',
            'experience.job1.company': 'Intelitec Solutions',
            'experience.job1.desc':
                'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
            'experience.job1.date': 'March 2013 - Present',
            'experience.job2.title': 'Web Developer',
            'experience.job2.company': 'Intelitec Solutions',
            'experience.job2.desc':
                'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
            'experience.job2.date': 'December 2011 - March 2013',
            'experience.job3.title': 'Junior Web Designer',
            'experience.job3.company': 'Shout! Media Productions',
            'experience.job3.desc':
                'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
            'experience.job3.date': 'July 2010 - December 2011',
            'experience.job4.title': 'Web Design Intern',
            'experience.job4.company': 'Shout! Media Productions',
            'experience.job4.desc':
                'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
            'experience.job4.date': 'September 2008 - June 2010',
            'education.title': 'Education',
            'education.item1.school': 'University of Colorado Boulder',
            'education.item1.degree': 'Bachelor of Science',
            'education.item1.track': 'Computer Science - Web Development Track',
            'education.item1.gpa': 'GPA: 3.23',
            'education.item1.date': 'August 2006 - May 2010',
            'education.item2.school': 'James Buchanan High School',
            'education.item2.degree': 'Technology Magnet Program',
            'education.item2.gpa': 'GPA: 3.56',
            'education.item2.date': 'August 2002 - May 2006',
            'skills.title': 'Skills',
            'skills.tools': 'Programming Languages & Tools',
            'skills.workflow': 'Workflow',
            'skills.item1': 'Mobile-First, Responsive Design',
            'skills.item2': 'Cross Browser Testing & Debugging',
            'skills.item3': 'Cross Functional Teams',
            'skills.item4': 'Agile Development & Scrum',
            'interests.title': 'Interests',
            'interests.p1':
                'Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.',
            'interests.p2':
                'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.',
            'awards.title': 'Awards & Certifications',
            'awards.item1': 'Google Analytics Certified Developer',
            'awards.item2': 'Mobile Web Specialist - Google Certification',
            'awards.item3':
                '1<sup>st</sup> Place - University of Colorado Boulder - Emerging Tech Competition 2009',
            'awards.item4':
                '1<sup>st</sup> Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)',
            'awards.item5':
                '2<sup>nd</sup> Place - University of Colorado Boulder - Emerging Tech Competition 2008',
            'awards.item6': '1<sup>st</sup> Place - James Buchanan High School - Hackathon 2006',
            'awards.item7': '3<sup>rd</sup> Place - James Buchanan High School - Hackathon 2005',
        },
        fa: {
            'meta.title': 'رزومه - علیرضا حسینی',
            'nav.toggle': 'باز و بسته کردن منو',
            'nav.about': 'درباره',
            'nav.experience': 'تجربه',
            'nav.education': 'تحصیلات',
            'nav.skills': 'مهارت‌ها',
            'nav.interests': 'علاقه‌مندی‌ها',
            'nav.awards': 'افتخارات',
            'lang.label': 'زبان',
            'about.subheading': 'کارشناسی مهندسی کامپیوتر · DevOps',
            'about.lead':
                'در به‌کارگیری چارچوب‌های چابک برای ارائهٔ نمای کلی محکم در سطح بالا تجربه دارم. رویکردهای تکرارشونده به استراتژی سازمانی، تفکر مشارکتی را تقویت می‌کنند تا ارزش پیشنهادی کلی افزایش یابد.',
            'experience.title': 'تجربه',
            'experience.job1.title': 'توسعه‌دهنده ارشد وب',
            'experience.job1.company': 'Intelitec Solutions',
            'experience.job1.desc':
                'استراتژی‌های برد-برد برای تسلط پیشگیرانه به میز می‌آورم. در نهایت، با حرکت به جلو، وضعیت جدیدی که از نسل X تکامل یافته به سمت راه‌حل ابری یکپارچه در حال حرکت است. محتوای تولیدشده توسط کاربر به‌صورت بلادرنگ نقاط تماس متعددی برای برون‌سپاری خواهد داشت.',
            'experience.job1.date': 'مارس ۲۰۱۳ - اکنون',
            'experience.job2.title': 'توسعه‌دهنده وب',
            'experience.job2.company': 'Intelitec Solutions',
            'experience.job2.desc':
                'از فرصت‌های آسان برای شناسایی فعالیت‌های ارزش‌افزوده و آزمایش بتا بهره می‌برم. با کلیک‌های بیشتر از DevOps، شکاف دیجیتال را پشت سر می‌گذارم. غوطه‌وری نانوتکنولوژی در بزرگراه اطلاعات، تمرکز صرف بر خط پایین را تکمیل می‌کند.',
            'experience.job2.date': 'دسامبر ۲۰۱۱ - مارس ۲۰۱۳',
            'experience.job3.title': 'طراح وب جونیور',
            'experience.job3.company': 'Shout! Media Productions',
            'experience.job3.desc':
                'مدیریت تغییر عملیاتی پادکست در گردش‌کارها برای ایجاد چارچوب. بردن شاخص‌های کلیدی عملکرد یکپارچه به حالت آفلاین برای حداکثر کردن دم بلند. تمرکز بر هدف در حین بررسی عمیق ذهنیت استارتاپی برای همگرایی چندسکویی.',
            'experience.job3.date': 'ژوئیه ۲۰۱۰ - دسامبر ۲۰۱۱',
            'experience.job4.title': 'کارآموز طراحی وب',
            'experience.job4.company': 'Shout! Media Productions',
            'experience.job4.desc':
                'مدیریت مشارکتی بازارهای توانمند از طریق شبکه‌های plug-and-play. به‌تعویق انداختن پویای کاربران B2C پس از مزایای پایه نصب‌شده. تجسم چشمگیر همگرایی هدایت‌شده توسط مشتری بدون ROI انقلابی.',
            'experience.job4.date': 'سپتامبر ۲۰۰۸ - ژوئن ۲۰۱۰',
            'education.title': 'تحصیلات',
            'education.item1.school': 'University of Colorado Boulder',
            'education.item1.degree': 'کارشناسی علوم',
            'education.item1.track': 'علوم کامپیوتر - گرایش توسعه وب',
            'education.item1.gpa': 'معدل: ۳.۲۳',
            'education.item1.date': 'اوت ۲۰۰۶ - مه ۲۰۱۰',
            'education.item2.school': 'James Buchanan High School',
            'education.item2.degree': 'برنامه مغناطیسی فناوری',
            'education.item2.gpa': 'معدل: ۳.۵۶',
            'education.item2.date': 'اوت ۲۰۰۲ - مه ۲۰۰۶',
            'skills.title': 'مهارت‌ها',
            'skills.tools': 'زبان‌ها و ابزارهای برنامه‌نویسی',
            'skills.workflow': 'گردش کار',
            'skills.item1': 'طراحی واکنش‌گرا و موبایل‌اول',
            'skills.item2': 'آزمایش و اشکال‌زدایی چندمرورگری',
            'skills.item3': 'تیم‌های بین‌رشته‌ای',
            'skills.item4': 'توسعه چابک و اسکرام',
            'interests.title': 'علاقه‌مندی‌ها',
            'interests.p1':
                'علاوه بر توسعه وب، بیشتر وقت آزادم را در فضای باز می‌گذرانم. در زمستان اسکی‌باز حرفه‌ای و کوهنوردی یخ مبتدی هستم. در ماه‌های گرم‌تر در کلرادو، از دوچرخه‌سواری کوهستان، سنگ‌نوردی آزاد و کایاک لذت می‌برم.',
            'interests.p2':
                'وقتی مجبور به ماندن در خانه می‌شوم، فیلم‌ها و سریال‌های علمی‌تخیلی و فانتزی دنبال می‌کنم، در حال یادگیری آشپزی هستم و زمان زیادی را صرف کشف جدیدترین پیشرفت‌های فناوری در دنیای توسعه فرانت‌اند می‌کنم.',
            'awards.title': 'افتخارات و گواهینامه‌ها',
            'awards.item1': 'توسعه‌دهنده گواهی‌شده Google Analytics',
            'awards.item2': 'متخصص وب موبایل - گواهی Google',
            'awards.item3':
                'رتبه ۱ - University of Colorado Boulder - مسابقه فناوری نوظهور ۲۰۰۹',
            'awards.item4':
                'رتبه ۱ - University of Colorado Boulder - Adobe Creative Jam 2008 (دسته UI)',
            'awards.item5':
                'رتبه ۲ - University of Colorado Boulder - مسابقه فناوری نوظهور ۲۰۰۸',
            'awards.item6': 'رتبه ۱ - James Buchanan High School - هکاتون ۲۰۰۶',
            'awards.item7': 'رتبه ۳ - James Buchanan High School - هکاتون ۲۰۰۵',
        },
    };

    function getStoredLang() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'fa' || stored === 'en' ? stored : null;
    }

    function applyTranslations(lang) {
        const strings = translations[lang];
        if (!strings) return;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (strings[key] !== undefined) {
                el.textContent = strings[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (strings[key] !== undefined) {
                el.innerHTML = strings[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (strings[key] !== undefined) {
                el.setAttribute('placeholder', strings[key]);
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            if (strings[key] !== undefined) {
                el.setAttribute('aria-label', strings[key]);
            }
        });

        const titleKey = document.documentElement.getAttribute('data-title-i18n');
        if (titleKey && strings[titleKey]) {
            document.title = strings[titleKey];
        }
    }

    function updateLangButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            const isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;

        const isFa = lang === 'fa';
        document.documentElement.lang = lang;
        document.documentElement.dir = isFa ? 'rtl' : 'ltr';

        applyTranslations(lang);
        updateLangButtons(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    }

    function initLanguageSwitcher() {
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                setLanguage(btn.getAttribute('data-lang'));
            });
        });
    }

    window.SiteI18n = {
        init() {
            const lang = getStoredLang() || 'en';
            initLanguageSwitcher();
            setLanguage(lang);
        },
    };
})();
