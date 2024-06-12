import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const languageTexts = {
    en: 'Switch to Russian',
    ru: 'Сменить язык на Турецкий',
    tr: 'Türkçe dil seçildi',
    zh: '选择了中文',
    ko: '한국어가 선택되었습니다',
};

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);
    const text = languageTexts[language] || 'Switch Language';

    return (
        <button className={styles.languageButton} onClick={toggleLanguage}>
            {text}
        </button>
    );
};

export default LanguageSwitcher;