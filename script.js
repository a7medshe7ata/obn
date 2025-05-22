document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const addContactBtn = document.getElementById('addContactBtn');
    const toggleLangBtn = document.getElementById('toggleLangBtn');
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Current language state (starts with Arabic)
    let isArabic = true;
    
    // Contact information
    const contactInfo = {
        firstName: 'عثمان',
        lastName: 'بن ناصر الزهراني',
        firstNameEn: 'Othman',
        lastNameEn: 'Bin Nasser Al-Zahrani',
        title: 'دكتور',
        titleEn: 'Dr.',
        organization: 'وان باينري نيكسس',
        organizationEn: 'One Binary Nexus (OBN)',
        jobTitle: 'المؤسس والمدير التنفيذي',
        jobTitleEn: 'Founder & CEO',
        email: 'Founder@obn.sa',
        phoneKSA: '+966555587150',
        phoneEG: '+201111800777',
        website: 'https://obn.sa',
        linkedin: 'https://linkedin.com/in/drbinnasser',
        twitter: 'https://x.com/obn_ksa',
        facebook: 'https://facebook.com/thmanbnnasr.2025',
        instagram: 'https://instagram.com/drbinnasser',
        snapchat: 'https://snapchat.com/add/drbinnasser',
        country: 'المملكة العربية السعودية',
        countryEn: 'Kingdom of Saudi Arabia',
        birthday: '1990-11-13',
        notes: {
            ar: 'دكتور في إدارة المعرفة وخبير في نظم المعلومات وإدارة المحتوى المؤسسي. متخصص في الشريعة والدراسات الإسلامية. ملتزم بتطبيق التكنولوجيا الحديثة لدعم رؤية المملكة 2030.',
            en: 'PhD in Knowledge Management and expert in information systems and enterprise content management. Specialized in Sharia and Islamic Studies. Committed to applying modern technology to support Saudi Vision 2030.'
        }
    };
    
    // Text translations
    const translations = {
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
        tabs: {
            profile: { ar: 'الملف الشخصي', en: 'Profile' },
            social: { ar: 'التواصل الاجتماعي', en: 'Social Media' },
            followers: { ar: 'المتابعون', en: 'Followers' },
            youtube: { ar: 'يوتيوب', en: 'YouTube' }
        },
        sections: {
            bio: { ar: 'نبذة عني', en: 'About Me' },
            education: { ar: 'المؤهلات الأكاديمية', en: 'Academic Qualifications' },
            experience: { ar: 'الخبرات المهنية', en: 'Professional Experience' },
            memberships: { ar: 'العضويات المهنية', en: 'Professional Memberships' },
            research: { ar: 'مجالات البحث', en: 'Research Areas' },
            skills: { ar: 'المهارات التقنية', en: 'Technical Skills' },
            socialLinks: { ar: 'روابط التواصل الاجتماعي', en: 'Social Media Links' },
            posts: { ar: 'آخر المنشورات', en: 'Latest Posts' },
            followers: { ar: 'المتابعون البارزون', en: 'Notable Followers' },
            youtube: { ar: 'قناة اليوتيوب', en: 'YouTube Channel' }
        },
        content: {
            bio: {
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
            },
            birthdate: {
                ar: '13 نوفمبر 1990',
                en: 'November 13, 1990'
            }
        },
        messages: {
            contactAdded: {
                ar: 'تم إنشاء ملف جهة الاتصال بنجاح! يمكنك الآن حفظه في هاتفك.',
                en: 'Contact file created successfully! You can now save it to your phone.'
            },
            contactError: {
                ar: 'حدث خطأ في إنشاء ملف جهة الاتصال. يرجى المحاولة مرة أخرى.',
                en: 'Error creating contact file. Please try again.'
            },
            languageChanged: {
                ar: 'تم تغيير اللغة إلى العربية',
                en: 'Language changed to English'
            }
        },
        footer: {
            poweredBy: { ar: 'مُقدم من', en: 'Powered by' },
            companyName: { ar: 'وان باينري نيكسس (OBN)', en: 'One Binary Nexus (OBN)' }
        },
        education: {
            phd: {
                ar: 'دكتوراه في إدارة المعرفة',
                en: 'PhD in Knowledge Management'
            },
            masterSharia: {
                ar: 'ماجستير في الشريعة والدراسات الإسلامية',
                en: 'Master\'s in Sharia and Islamic Studies'
            },
            diplomaSharia: {
                ar: 'دبلوم عالي في الشريعة والدراسات الإسلامية',
                en: 'Higher Diploma in Sharia and Islamic Studies'
            },
            masterInfo: {
                ar: 'ماجستير في إدارة المعلومات',
                en: 'Master\'s in Information Management'
            },
            bachelor: {
                ar: 'بكالوريوس في علم المعلومات',
                en: 'Bachelor\'s in Information Science'
            },
            kau: {
                ar: 'جامعة الملك عبد العزيز',
                en: 'King Abdulaziz University'
            },
            uqu: {
                ar: 'جامعة أم القرى',
                en: 'Umm Al-Qura University'
            },
            excellent: {
                ar: 'امتياز',
                en: 'Excellent'
            },
            veryGood: {
                ar: 'جيد جداً',
                en: 'Very Good'
            }
        },
        experience: {
            ceo: {
                ar: 'المؤسس والمدير التنفيذي',
                en: 'Founder and CEO'
            },
            boardMember: {
                ar: 'عضو مجلس إدارة',
                en: 'Board Member'
            },
            member: {
                ar: 'عضو',
                en: 'Member'
            },
            obn: {
                ar: 'وان باينري نيكسس',
                en: 'One Binary Nexus'
            },
            lawFirm: {
                ar: 'شركة مقام السلام للمحاماة والاستشارات القانونية',
                en: 'Maqam Al-Salam Law and Legal Consultancy Company'
            },
            icom: {
                ar: 'المجلس الدولي للمتاحف',
                en: 'International Council of Museums'
            },
            salamGroup: {
                ar: 'مجموعة السلام آسك',
                en: 'Al-Salam Ask Group'
            },
            present: {
                ar: 'الحاضر',
                en: 'Present'
            }
        }
    };
    
    // Generate VCard function with comprehensive contact information
    function generateVCard() {
        const currentLang = isArabic ? 'ar' : 'en';
        const name = isArabic ? 
            `${contactInfo.title} ${contactInfo.firstName} ${contactInfo.lastName}` :
            `${contactInfo.titleEn} ${contactInfo.firstNameEn} ${contactInfo.lastNameEn}`;
        
        const organization = isArabic ? contactInfo.organization : contactInfo.organizationEn;
        const jobTitle = isArabic ? contactInfo.jobTitle : contactInfo.jobTitleEn;
        const country = isArabic ? contactInfo.country : contactInfo.countryEn;
        const note = contactInfo.notes[currentLang];
        
        // VCard 3.0 format with comprehensive information
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
N:${isArabic ? contactInfo.lastName : contactInfo.lastNameEn};${isArabic ? contactInfo.firstName : contactInfo.firstNameEn};;;${isArabic ? contactInfo.title : contactInfo.titleEn}
ORG:${organization}
TITLE:${jobTitle}
EMAIL;TYPE=WORK:${contactInfo.email}
TEL;TYPE=WORK,VOICE:${contactInfo.phoneKSA}
TEL;TYPE=CELL:${contactInfo.phoneEG}
URL;TYPE=WORK:${contactInfo.website}
ADR;TYPE=WORK:;;;${country};;;;
BDAY:${contactInfo.birthday}
NOTE:${note}
X-SOCIALPROFILE;TYPE=linkedin:${contactInfo.linkedin}
X-SOCIALPROFILE;TYPE=twitter:${contactInfo.twitter}
X-SOCIALPROFILE;TYPE=facebook:${contactInfo.facebook}
X-SOCIALPROFILE;TYPE=instagram:${contactInfo.instagram}
X-SOCIALPROFILE;TYPE=snapchat:${contactInfo.snapchat}
CATEGORIES:Business,Technology,Education,Research
REV:${new Date().toISOString()}
END:VCARD`;
        
        return vcard;
    }
    
    // Device detection functions
    function isIOSDevice() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
    
    function isSafari() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    }
    
    function isAndroidDevice() {
        return /Android/i.test(navigator.userAgent);
    }
    
    // Save contact function with enhanced iOS support
    function saveContact() {
        try {
            const vcard = generateVCard();
            const currentLang = isArabic ? 'ar' : 'en';
            const fileName = isArabic ? 
                `د_عثمان_بن_ناصر_الزهراني.vcf` : 
                `Dr_Othman_Al_Zahrani.vcf`;
            
            // Add loading state to button
            const originalContent = addContactBtn.innerHTML;
            addContactBtn.innerHTML = `
                <svg class="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                ${isArabic ? 'جاري الحفظ...' : 'Saving...'}
            `;
            addContactBtn.disabled = true;
            
            if (isIOSDevice()) {
                // Enhanced iOS handling
                const dataUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;
                
                // Try multiple methods for iOS
                if (navigator.share && navigator.canShare) {
                    // Use Web Share API if available (iOS 12+)
                    const blob = new Blob([vcard], { type: 'text/vcard' });
                    const file = new File([blob], fileName, { type: 'text/vcard' });
                    
                    if (navigator.canShare({ files: [file] })) {
                        navigator.share({
                            title: name,
                            text: isArabic ? 'معلومات الاتصال' : 'Contact Information',
                            files: [file]
                        }).then(() => {
                            showNotification(translations.messages.contactAdded[currentLang], 'success');
                        }).catch(() => {
                            fallbackDownload(vcard, fileName, currentLang);
                        });
                    } else {
                        fallbackDownload(vcard, fileName, currentLang);
                    }
                } else {
                    // Traditional iOS method
                    const newWindow = window.open(dataUrl, '_blank');
                    
                    if (newWindow) {
                        showNotification(translations.messages.contactAdded[currentLang], 'success');
                        setTimeout(() => {
                            if (newWindow && !newWindow.closed) {
                                newWindow.close();
                            }
                        }, 2000);
                    } else {
                        fallbackDownload(vcard, fileName, currentLang);
                    }
                }
            } else {
                // Standard download for other platforms
                fallbackDownload(vcard, fileName, currentLang);
            }
            
        } catch (error) {
            console.error('Error saving contact:', error);
            const currentLang = isArabic ? 'ar' : 'en';
            showNotification(translations.messages.contactError[currentLang], 'error');
        } finally {
            // Restore button state
            setTimeout(() => {
                addContactBtn.innerHTML = originalContent;
                addContactBtn.disabled = false;
            }, 1000);
        }
    }
    
    // Fallback download method
    function fallbackDownload(vcard, fileName, currentLang) {
        try {
            const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            link.style.display = 'none';
            
            // Add to DOM, click, and remove
            document.body.appendChild(link);
            link.click();
            
            setTimeout(() => {
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }, 100);
            
            showNotification(translations.messages.contactAdded[currentLang], 'success');
            
        } catch (error) {
            console.error('Fallback download failed:', error);
            showNotification(translations.messages.contactError[currentLang], 'error');
        }
    }
    
    // Enhanced notification system
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => {
            notif.style.opacity = '0';
            notif.style.transform = 'translateX(100%)';
            setTimeout(() => notif.remove(), 300);
        });
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = type === 'success' ? 
            `<svg class="w-4 h-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>` :
            `<svg class="w-4 h-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`;
        
        notification.innerHTML = `
            <div class="flex items-center text-sm font-medium">
                ${icon}
                <span>${message}</span>
            </div>
        `;
        
        // Position notification
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto hide after 4 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }, 4000);
    }
    
    // Tab switching function with smooth transitions
    function switchTab(tabId) {
        // Remove active class from all tabs
        navTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Hide all content sections with fade effect
        contentSections.forEach(section => {
            if (section.classList.contains('active')) {
                section.style.opacity = '0';
                section.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    section.classList.remove('active');
                }, 150);
            }
        });
        
        // Add active class to clicked tab
        const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // Show corresponding content section with fade effect
        setTimeout(() => {
            const activeSection = document.getElementById(`${tabId}-section`);
            if (activeSection) {
                activeSection.classList.add('active');
                activeSection.style.opacity = '0';
                activeSection.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    activeSection.style.opacity = '1';
                    activeSection.style.transform = 'translateY(0)';
                }, 50);
            }
        }, 150);
        
        // Analytics tracking (if needed)
        console.log(`Tab switched to: ${tabId}`);
    }
    
    // Update content based on language with comprehensive translations
    function updateContent() {
        const currentLang = isArabic ? 'ar' : 'en';
        
        // Update document title and meta
        document.title = isArabic ? 
            'د. عثمان بن ناصر الزهراني - البطاقة الشخصية' : 
            'Dr. Othman Bin Nasser Al-Zahrani - Digital Profile Card';
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = isArabic ?
                'الملف الشخصي للدكتور عثمان بن ناصر الزهراني - خبير إدارة المعرفة ونظم المعلومات' :
                'Digital profile of Dr. Othman Bin Nasser Al-Zahrani - Knowledge Management and Information Systems Expert';
        }
        
        // Update header content
        const profileName = document.querySelector('.profile-info h1');
        const profileTitle = document.querySelector('.profile-info p');
        
        if (profileName) profileName.textContent = translations.header.name[currentLang];
        if (profileTitle) profileTitle.textContent = translations.header.title[currentLang];
        
        // Update button texts with icons
        addContactBtn.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            ${translations.header.addContact[currentLang]}
        `;
        
        toggleLangBtn.innerHTML = `
            <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            ${translations.header.toggleLang[currentLang]}
        `;
        
        // Update tab names
        navTabs.forEach(tab => {
            const tabId = tab.getAttribute('data-tab');
            const icon = tab.querySelector('svg').outerHTML;
            tab.innerHTML = `${icon}${translations.tabs[tabId][currentLang]}`;
        });
        
        // Update section headings
        const sectionMappings = [
            { selector: 'h2', arabic: 'نبذة عني', key: 'bio' },
            { selector: 'h2', arabic: 'المؤهلات الأكاديمية', key: 'education' },
            { selector: 'h2', arabic: 'الخبرات المهنية', key: 'experience' },
            { selector: 'h2', arabic: 'العضويات المهنية', key: 'memberships' },
            { selector: 'h2', arabic: 'مجالات البحث', key: 'research' },
            { selector: 'h2', arabic: 'المهارات التقنية', key: 'skills' },
            { selector: 'h2', arabic: 'روابط التواصل الاجتماعي', key: 'socialLinks' },
            { selector: 'h2', arabic: 'آخر المنشورات', key: 'posts' },
            { selector: 'h2', arabic: 'المتابعون البارزون', key: 'followers' },
            { selector: 'h2', arabic: 'قناة اليوتيوب', key: 'youtube' }
        ];
        
        sectionMappings.forEach(mapping => {
            const headings = document.querySelectorAll(mapping.selector);
            headings.forEach(heading => {
                if (heading.textContent.includes(mapping.arabic)) {
                    heading.textContent = translations.sections[mapping.key][currentLang];
                }
            });
        });
        
        // Update bio content
        const bioContent = document.querySelector('#profile-section p');
        if (bioContent && bioContent.textContent.includes('دكتور في إدارة المعرفة')) {
            bioContent.textContent = translations.content.bio[currentLang];
        }
        
        // Update contact info
        const infoItems = document.querySelectorAll('.info-item span');
        infoItems.forEach(item => {
            const text = item.textContent.trim();
            if (text === 'المملكة العربية السعودية') {
                item.textContent = translations.content.location[currentLang];
            } else if (text === 'سعودي') {
                item.textContent = translations.content.nationality[currentLang];
            } else if (text === '13 نوفمبر 1990') {
                item.textContent = translations.content.birthdate[currentLang];
            }
        });
        
        // Update footer
        const footerContent = document.querySelector('.footer-content');
        if (footerContent) {
            footerContent.innerHTML = `
                ${translations.footer.poweredBy[currentLang]} 
                <span class="footer-brand">${translations.footer.companyName[currentLang]}</span>
            `;
        }
    }
    
    // Toggle language function with smooth transition
    function toggleLanguage() {
        // Add transition effect
        document.body.style.transition = 'all 0.3s ease';
        
        isArabic = !isArabic;
        
        // Update HTML attributes
        document.documentElement.lang = isArabic ? 'ar' : 'en';
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
        
        // Update all content
        updateContent();
        
        // Show language change notification
        const currentLang = isArabic ? 'ar' : 'en';
        showNotification(translations.messages.languageChanged[currentLang], 'success');
        
        // Remove transition after animation
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    // Initialize skills animation with intersection observer
    function initializeSkillsAnimation() {
        const skillsSection = document.querySelector('#profile-section');
        const progressBars = document.querySelectorAll('.progress-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate progress bars
                    progressBars.forEach((bar, index) => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 300 + (index * 100)); // Staggered animation
                    });
                    
                    // Unobserve after first animation
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });
        
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }
    
    // Initialize card animations
    function initializeCardAnimations() {
        const cards = document.querySelectorAll('.card');
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            cardObserver.observe(card);
        });
    }
    
    // Add click effects to interactive elements
    function addClickEffects() {
        const clickableElements = document.querySelectorAll('button, a, .nav-tab');
        
        clickableElements.forEach(element => {
            element.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.className = 'ripple-effect';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    // Initialize keyboard navigation
    function initializeKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
            
            // Arrow key navigation for tabs
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                const activeTab = document.querySelector('.nav-tab.active');
                if (activeTab && document.activeElement === activeTab) {
                    e.preventDefault();
                    const tabs = Array.from(navTabs);
                    const currentIndex = tabs.indexOf(activeTab);
                    let nextIndex;
                    
                    if (e.key === 'ArrowRight') {
                        nextIndex = currentIndex + 1 >= tabs.length ? 0 : currentIndex + 1;
                    } else {
                        nextIndex = currentIndex - 1 < 0 ? tabs.length - 1 : currentIndex - 1;
                    }
                    
                    tabs[nextIndex].click();
                    tabs[nextIndex].focus();
                }
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
    
    // Performance monitoring
    function initializePerformanceMonitoring() {
        // Log page load time
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        });
        
        // Monitor tab switching performance
        let tabSwitchStart;
        navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabSwitchStart = performance.now();
            });
        });
        
        // Log tab switch completion
        const observer = new MutationObserver(() => {
            if (tabSwitchStart) {
                const switchTime = performance.now() - tabSwitchStart;
                console.log(`Tab switch completed in ${switchTime.toFixed(2)}ms`);
                tabSwitchStart = null;
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });
    }
    
    // Event listeners
    addContactBtn.addEventListener('click', saveContact);
    toggleLangBtn.addEventListener('click', toggleLanguage);
    
    // Tab navigation with enhanced accessibility
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
        
        // Add keyboard support
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tab.click();
            }
        });
    });
    
    // Add ripple effect styles
    const rippleStyles = document.createElement('style');
    rippleStyles.textContent = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            pointer-events: none;
            animation: ripple-animation 0.6s ease-out;
        }
        
        @keyframes ripple-animation {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        .keyboard-navigation *:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
            border-radius: 4px;
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .animate-spin {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(rippleStyles);
    
    // Initialize all features
    function initialize() {
        updateContent();
        initializeSkillsAnimation();
        initializeCardAnimations();
        addClickEffects();
        initializeKeyboardNavigation();
        initializePerformanceMonitoring();
        
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Log successful initialization
        console.log('Dr. Othman Al-Zahrani Digital Profile Card initialized successfully');
        console.log('Features: iOS Contact Save, Bilingual Support, Smooth Animations, Accessibility');
        
        // Add version info
        window.profileCardVersion = '2.0.0';
        window.lastUpdated = '2025-01-15';
    }
    
    // Initialize when DOM is ready
    initialize();
    
    // Export functions for external use if needed
    window.profileCard = {
        saveContact,
        toggleLanguage,
        switchTab,
        showNotification
    };
});