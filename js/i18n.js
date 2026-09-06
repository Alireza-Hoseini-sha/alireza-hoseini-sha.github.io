/*!
 * Site i18n (en / fa)
 */
(function () {
    const STORAGE_KEY = 'site-lang';

    const translations = {
        en: {
            'meta.title': 'CV - Alireza Hoseini',
            'nav.toggle': 'Toggle navigation',
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.interests': 'Interests',
            'nav.awards': 'Awards',
            'lang.label': 'Language',
            'theme.toggle': 'Toggle dark mode',
            'theme.dark': 'Dark',
            'theme.light': 'Light',
            'about.subheading': "Bachelor's in Computer Engineering · Junior DevOps Engineer",
            'about.lead':
                'Computer Engineering graduate with a strong interest in DevOps, Linux, and infrastructure automation. I have built hands-on projects using Linux, Docker, Docker Compose, Git, GitLab CI/CD, Nexus Repository, and Solidity while continuously expanding my practical experience in Kubernetes and Ansible. In addition to DevOps, I have explored Ethereum, smart contract development, and Web3 security through practical labs and personal projects. I enjoy building reliable systems, automating workflows, and continuously learning modern infrastructure technologies. I am currently seeking an opportunity to start my career as a Junior DevOps Engineer and contribute to real-world engineering teams.',
            'experience.title': 'Experience',
            'experience.job1.title': 'DevOps Engineer',
            'experience.job1.company': 'Personal Project',
            'experience.job1.n1': 'Designed and deployed a multi-node Kubernetes cluster using Kubeadm, Ansible, and KVM/libvirt.',
            'experience.job1.n2': 'Automated VM provisioning and Kubernetes node configuration using Ansible.',
            'experience.job1.n3': 'Containerized and deployed a microservices-based application using Docker and Kubernetes.',
            'experience.job1.n4': 'Created Kubernetes manifests for Deployments, Services, ConfigMaps, Secrets, and Ingress.',
            'experience.job1.n5': 'Built a GitLab CI/CD workflow for automated application build and deployment.',
            'experience.job1.n6': 'Configured a private container registry and integrated it with the Kubernetes cluster.',
            'experience.job1.n7': 'Applied Linux system administration, networking, containerization, and troubleshooting skills throughout the project.',
            'experience.job1.n8': 'Documented the infrastructure and deployment process as part of a technical portfolio.',
            'experience.job1.date': 'Jan 2026 - Present',
            'experience.job2.title': 'Web3 Security and Developer',
            'experience.job2.company': 'Personal Projects',
            'experience.job2.n1': 'Developed and tested Solidity smart contracts using the Foundry development framework.',
            'experience.job2.n2': 'Built and interacted with Ethereum-compatible contracts using Forge, Anvil, and Cast.',
            'experience.job2.n3': 'Implemented DeFi and token-related functionality using OpenZeppelin libraries and standards.',
            'experience.job2.n4': 'Analyzed smart contracts for common vulnerabilities, including reentrancy, access control, price manipulation, and logic flaws.',
            'experience.job2.n5': 'Practiced smart contract exploitation and security analysis through Ethernaut and Damn Vulnerable DeFi challenges.',
            'experience.job2.n6': 'Used Slither for static analysis and automated vulnerability detection.',
            'experience.job2.n7': 'Worked with Chainlink and studied security considerations around oracle-based smart contract integrations.',
            'experience.job2.n8': 'Applied secure development practices and performed hands-on security testing of Solidity-based applications.',
            'experience.job2.n9': 'Explored DeFi protocols, token standards, oracles, and common Web3 attack vectors.',
            'experience.job2.date': 'Feb 2024 - Nov 2025',
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
            'education.item1.school': 'Mazandaran University of Science and Technology',
            'education.item1.degree': 'B.Sc in Software Engineering',
            'education.item1.track': '',
            'education.item1.gpa': '',
            'education.item1.date': 'September 2016 - December 2021',
            'education.item2.school': 'Molavi High School',
            'education.item2.degree': 'Diploma in Natural Science',
            'education.item2.gpa': '',
            'education.item2.date': 'September 2011 - June 2015',
            'skills.title': 'Skills',
            'skills.tools': 'Tools & Programming Languages',
            'skills.workflow': '',
            'skills.item1': 'Kuberenetes',
            'skills.item2': 'Docker, Docker-Compose',
            'skills.item3': 'Linux',
            'skills.item4': 'Gitlab Instance, Gitlab Ci',
            'skills.item5': 'Git',
            'skills.item6': 'ArgoCD',
            'skills.item7': 'Monitoring',
            'skills.item8': 'Solidity',
            'interests.title': 'Interests',
            'interests.p1':
                'Outside of technology, I enjoy gaming, watching series, exploring new places, learning about different cultures, and staying active through fitness. I also have a interest in cybersecurity and emerging technologies.',
            'interests.p2': 'Tech interests:',
            'interests.n1': 'DevOps & Cloud Infrastructure',
            'interests.n2': 'Kubernetes & Containerization',
            'interests.n3': 'Infrastructure Automation',
            'interests.n4': 'Linux & Networking',
            'interests.n5': 'Cybersecurity',
            'interests.n6': 'Open-Source Technologies',
            'awards.title': 'Certifications',
            'awards.item1': 'Maktabkhoneh Git & Github Certificate',
            'awards.item2': 'Maktabkhoneh Network Principles',
            'awards.item3': 'Maktabkhoneh Python Programming for Beginners',
        },
        // fa: {
            // 'meta.title': 'رزومه - علیرضا حسینی',
            // 'nav.toggle': 'باز و بسته کردن منو',
            // 'nav.about': 'درباره',
            // 'nav.experience': 'تجربه',
            // 'nav.education': 'تحصیلات',
            // 'nav.skills': 'مهارت‌ها',
            // 'nav.interests': 'علاقه‌مندی‌ها',
            // 'nav.awards': 'افتخارات',
            // 'lang.label': 'زبان',
            // 'theme.toggle': 'تغییر حالت تاریک',
            // 'theme.dark': 'حالت تاریک',
            // 'theme.light': 'حالت روشن',
            // 'about.subheading': 'کارشناسی مهندسی کامپیوتر · DevOps جونیور',
            // 'about.lead':
                // // // // // // // // // // // 'فارغ‌التحصیل مهندسی کامپیوتر با علاقه‌مندی جدی به حوزه‌های DevOps، لینوکس و خودکارسازی زیرساخت. تجربه انجام پروژه‌های عملی با استفاده از لینوکس، Docker، Docker Compose، Git، GitLab CI/CD، Nexus Repository و Solidity را دارم و هم‌زمان در حال گسترش تجربه عملی خود در Kubernetes و Ansible هستم.علاوه بر DevOps، از طریق آزمایشگاه‌های عملی و پروژه‌های شخصی، توسعه قراردادهای هوشمند اتریوم و امنیت Web3 را نیز بررسی و تجربه کرده‌ام. به ساخت سیستم‌های پایدار و قابل‌اعتماد، خودکارسازی فرایندها و یادگیری مداوم فناوری‌های مدرن زیرساخت علاقه‌مندم.در حال حاضر به دنبال فرصتی برای آغاز مسیر حرفه‌ای خود به عنوان مهندس DevOps جونیور هستم تا بتوانم در تیم‌های مهندسی واقعی مشارکت کرده و به توسعه و نگهداری زیرساخت‌های عملیاتی کمک کنم.',
            // 'experience.title': 'تجربه',
            // 'experience.job1.title': 'توسعه‌دهنده ارشد وب',
            // 'experience.job1.company': 'Intelitec Solutions',
            // 'experience.job1.desc':
                // // // // 'استراتژی‌های برد-برد برای تسلط پیشگیرانه به میز می‌آورم. در نهایت، با حرکت به جلو، وضعیت جدیدی که از نسل X تکامل یافته به سمت راه‌حل ابری یکپارچه در حال حرکت است. محتوای تولیدشده توسط کاربر به‌صورت بلادرنگ نقاط تماس متعددی برای برون‌سپاری خواهد داشت.',
            // 'experience.job1.date': 'مارس ۲۰۱۳ - اکنون',
            // 'experience.job2.title': 'توسعه‌دهنده وب',
            // 'experience.job2.company': 'Intelitec Solutions',
            // 'experience.job2.desc':
                // // // // 'از فرصت‌های آسان برای شناسایی فعالیت‌های ارزش‌افزوده و آزمایش بتا بهره می‌برم. با کلیک‌های بیشتر از DevOps، شکاف دیجیتال را پشت سر می‌گذارم. غوطه‌وری نانوتکنولوژی در بزرگراه اطلاعات، تمرکز صرف بر خط پایین را تکمیل می‌کند.',
            // 'experience.job2.date': 'دسامبر ۲۰۱۱ - مارس ۲۰۱۳',
            // 'experience.job3.title': 'طراح وب جونیور',
            // 'experience.job3.company': 'Shout! Media Productions',
            // 'experience.job3.desc':
                // // // 'مدیریت تغییر عملیاتی پادکست در گردش‌کارها برای ایجاد چارچوب. بردن شاخص‌های کلیدی عملکرد یکپارچه به حالت آفلاین برای حداکثر کردن دم بلند. تمرکز بر هدف در حین بررسی عمیق ذهنیت استارتاپی برای همگرایی چندسکویی.',
            // 'experience.job3.date': 'ژوئیه ۲۰۱۰ - دسامبر ۲۰۱۱',
            // 'experience.job4.title': 'کارآموز طراحی وب',
            // 'experience.job4.company': 'Shout! Media Productions',
            // 'experience.job4.desc':
                // // // 'مدیریت مشارکتی بازارهای توانمند از طریق شبکه‌های plug-and-play. به‌تعویق انداختن پویای کاربران B2C پس از مزایای پایه نصب‌شده. تجسم چشمگیر همگرایی هدایت‌شده توسط مشتری بدون ROI انقلابی.',
            // 'experience.job4.date': 'سپتامبر ۲۰۰۸ - ژوئن ۲۰۱۰',
            // 'education.title': 'تحصیلات',
            // 'education.item1.school': 'University of Colorado Boulder',
            // 'education.item1.degree': 'کارشناسی علوم',
            // 'education.item1.track': 'علوم کامپیوتر - گرایش توسعه وب',
            // 'education.item1.date': 'مهر 1395 - بهمن 1400',
            // 'education.item2.school': 'James Buchanan High School',
            // 'education.item2.degree': 'برنامه مغناطیسی فناوری',
            // 'education.item2.date': 'مهر 1390 - خرداد 1394',
            // 'skills.title': 'مهارت‌ها',
            // 'skills.tools': 'زبان‌ها و ابزارها',
            // 'interests.title': 'علاقه‌مندی‌ها',
            // 'interests.p1':
                // // // 'علاوه بر توسعه وب، بیشتر وقت آزادم را در فضای باز می‌گذرانم. در زمستان اسکی‌باز حرفه‌ای و کوهنوردی یخ مبتدی هستم. در ماه‌های گرم‌تر در کلرادو، از دوچرخه‌سواری کوهستان، سنگ‌نوردی آزاد و کایاک لذت می‌برم.',
            // 'interests.p2':
                // // // 'وقتی مجبور به ماندن در خانه می‌شوم، فیلم‌ها و سریال‌های علمی‌تخیلی و فانتزی دنبال می‌کنم، در حال یادگیری آشپزی هستم و زمان زیادی را صرف کشف جدیدترین پیشرفت‌های فناوری در دنیای توسعه فرانت‌اند می‌کنم.',
            // 'awards.title': 'گواهینامه‌ها',
            // 'awards.item1': 'مکتب خونه گیت و گیت هاب',
            // 'awards.item2': 'مکتب خونه درک شبکه',
            // 'awards.item3': 'مکتب خونه پایتون مقدماتی',
        // },
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

        currentLang = lang;
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

    let currentLang = 'en';

    window.SiteI18n = {
        init() {
            currentLang = getStoredLang() || 'en';
            initLanguageSwitcher();
            setLanguage(currentLang);
        },
        getLang() {
            return currentLang;
        },
        refresh() {
            applyTranslations(currentLang);
        },
    };
})();
