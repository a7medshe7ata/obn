document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const app = document.getElementById('app');
    const addContactBtn = document.getElementById('addContactBtn');
    const toggleLangBtn = document.getElementById('toggleLangBtn');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Current language state (starts with Arabic)
    let isArabic = true;
    
    // Text translations
    const translations = {
        // Header
        header: {
            name: {
                ar: 'دكتور عثمان بن ناصر الزهراني',
                en: 'Dr. Othman Bin Nasser Al-Zahrani'
            },
            title: {
                ar: 'المؤسس والمدير التنفيذي - وان باينري نيكسس',
                en: 'Founder & CEO - One Binary Nexus (OBN)'
            },
            addContact: {
                ar: 'إضافة جهة اتصال',
                en: 'Add Contact'
            },
            toggleLang: {
                ar: 'English',
                en: 'العربية'
            }
        },
        
        // Tab Names
        tabs: {
            profile: {
                ar: 'الملف الشخصي',
                en: 'Profile'
            },
            social: {
                ar: 'التواصل الاجتماعي',
                en: 'Social Media'
            },
            followers: {
                ar: 'المتابعون',
                en: 'Followers'
            },
            youtube: {
                ar: 'يوتيوب',
                en: 'YouTube'
            }
        },
        
        // Bio Section
        bio: {
            title: {
                ar: 'نبذة عني',
                en: 'About Me'
            },
            content: {
                ar: 'دكتور في إدارة المعرفة وخبير في نظم المعلومات وإدارة المحتوى المؤسسي. متخصص في الشريعة والدراسات الإسلامية. ملتزم بتطبيق التكنولوجيا الحديثة لدعم رؤية المملكة 2030.',
                en: 'PhD in Knowledge Management and expert in information systems and enterprise content management. Specialized in Sharia and Islamic Studies. Committed to applying modern technology to support Saudi Vision 2030.'
            },
            location: {
                ar: 'المملكة العربية السعودية',
                en: 'Kingdom of Saudi Arabia'
            },
            nationality: {
                ar: 'سعودي',
                en: 'Saudi'
            }
        },
        
        // Education Section
        education: {
            title: {
                ar: 'المؤهلات الأكاديمية',
                en: 'Education'
            },
            degrees: [
                {
                    name: {
                        ar: 'دكتوراه في إدارة المعرفة',
                        en: 'PhD in Knowledge Management'
                    },
                    institution: {
                        ar: 'جامعة الملك عبد العزيز',
                        en: 'King Abdulaziz University'
                    },
                    year: {
                        ar: '2024',
                        en: '2024'
                    },
                    grade: {
                        ar: 'امتياز',
                        en: 'Excellent'
                    }
                },
                {
                    name: {
                        ar: 'ماجستير في الشريعة والدراسات الإسلامية',
                        en: 'Master\'s in Sharia and Islamic Studies'
                    },
                    institution: {
                        ar: 'جامعة أم القرى',
                        en: 'Umm Al-Qura University'
                    },
                    year: {
                        ar: '2024',
                        en: '2024'
                    },
                    grade: {
                        ar: 'امتياز',
                        en: 'Excellent'
                    }
                }
                // Other degrees would follow the same pattern
            ]
        },
        
        // Experience Section
        experience: {
            title: {
                ar: 'الخبرات المهنية',
                en: 'Professional Experience'
            },
            positions: [
                {
                    title: {
                        ar: 'المؤسس والمدير التنفيذي',
                        en: 'Founder and CEO'
                    },
                    company: {
                        ar: 'وان باينري نيكسس',
                        en: 'One Binary Nexus (OBN)'
                    },
                    period: {
                        ar: '2024 - الحاضر',
                        en: '2024 - Present'
                    },
                    description: {
                        ar: 'قيادة الشركة في تطوير حلول تقنية متقدمة تتماشى مع رؤية المملكة 2030.',
                        en: 'Leading the company in developing advanced technical solutions aligned with Saudi Vision 2030.'
                    }
                }
                // Other positions would follow the same pattern
            ]
        },
        
        // Footer
        footer: {
            poweredBy: {
                ar: 'مُقدم من',
                en: 'Powered by'
            },
            companyName: {
                ar: 'وان باينري نيكسس (OBN)',
                en: 'One Binary Nexus (OBN)'
            }
        }
    };
    
    // Function to handle tab switching
    function switchTab(tabId) {
        // Hide all tabs
        tabContents.forEach(tab => {
            tab.classList.add('hidden');
        });
        
        // Remove active class from all tab buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
            btn.classList.add('text-gray-500');
        });
        
        // Show the selected tab
        const selectedTab = document.getElementById(tabId + '-tab');
        selectedTab.classList.remove('hidden');
        
        // Add active class to the clicked button
        const selectedBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        selectedBtn.classList.remove('text-gray-500');
        selectedBtn.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
    }
    
    // Add event listeners to tab buttons
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Function to toggle language
    function toggleLanguage() {
        isArabic = !isArabic;
        
        // Update HTML dir attribute and text direction
        document.documentElement.lang = isArabic ? 'ar' : 'en';
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
        
        // Update button text
        toggleLangBtn.textContent = isArabic ? 'English' : 'العربية';
        addContactBtn.textContent = isArabic ? 'إضافة جهة اتصال' : 'Add Contact';
        
        // Update tab names
        tabButtons.forEach(btn => {
            const tabId = btn.getAttribute('data-tab');
            btn.textContent = translations.tabs[tabId][isArabic ? 'ar' : 'en'];
        });
        
        // Update section titles
        const bioTitle = document.querySelector('#profile-tab h2:first-child');
        if (bioTitle) bioTitle.textContent = translations.bio.title[isArabic ? 'ar' : 'en'];
        
        const educationTitle = document.querySelector('#profile-tab div:nth-child(2) h2');
        if (educationTitle) educationTitle.textContent = translations.education.title[isArabic ? 'ar' : 'en'];
        
        const experienceTitle = document.querySelector('#profile-tab div:nth-child(3) h2');
        if (experienceTitle) experienceTitle.textContent = translations.experience.title[isArabic ? 'ar' : 'en'];
        
        // Update footer text
        const footerPoweredBy = document.querySelector('footer div div:first-child');
        if (footerPoweredBy) footerPoweredBy.textContent = translations.footer.poweredBy[isArabic ? 'ar' : 'en'];
        
        // Many more elements would need to be updated for a complete translation
        // This is a simplified version focusing on key elements
    }
    
    // Add event listener to language toggle button
    toggleLangBtn.addEventListener('click', toggleLanguage);
    
    // Add event listener to add contact button
    addContactBtn.addEventListener('click', function() {
        const message = isArabic ? 'تمت إضافة جهة الاتصال إلى هاتفك!' : 'Contact has been added to your phone!';
        alert(message);
        
        // In a real implementation, you would use the Contacts API
        // For example:
        /*
        if ('contacts' in navigator && 'ContactsManager' in window) {
            const props = ['name', 'email', 'tel'];
            const opts = {multiple: false};
            
            navigator.contacts.select(props, opts)
                .then(contacts => {
                    // Process the contact
                })
                .catch(err => {
                    // Handle error
                });
        }
        */
    });
});