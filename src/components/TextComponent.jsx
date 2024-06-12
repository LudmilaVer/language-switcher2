import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './TextComponent.module.css';

const languageTexts = {
    en: 'English language was chosen',
    ru: 'Был выбран русский язык',
    tr: 'Türkçe dil seçildi',
    zh: '选择了中文',
    ko: '한국어가 선택되었습니다',
};

const TextComponent = () => {
    const { language } = useContext(LanguageContext);
    const text = languageTexts[language] || 'Language not found';

    return (
        <h1 className={styles.languageText}>{text}</h1>
    );
};

export default TextComponent;
