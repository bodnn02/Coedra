import React from 'react'

import { useTranslation } from "react-i18next";

export const Notfoundpage = () => {
  const { t } = useTranslation();

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#21272F'
    },
    message: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: "#D2D4D7"
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.message}>404 - {t("page-not-found")}</div>
    </div>
  )
}
