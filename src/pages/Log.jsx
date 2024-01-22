import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Log = () => {
  const { t } = useTranslation();

  const [logs, setLogs] = useState([
    { name: "ST", content: `test st content` },
    { name: "Error", content: `test error content` },
    { name: "Net", content: `test net content` }
  ]);

  const [selectedLog, setSelectedLog] = useState(logs[0]);

  const handleTabClick = (log) => {
    setSelectedLog(log);
  };

  return (
    <div className="log">
      <div className="log__header">
        <div className="log-tabs">
          {logs.map((log) => (
            <div
              className={`log-tabs__item ${log === selectedLog ? 'selected' : ''}`}
              key={log.name}
              onClick={() => handleTabClick(log)}
            >
              {`${t('log')} ${log.name}`}
            </div>
          ))}
        </div>
      </div>
      <div className="log__content">
        <textarea
          className="log__textarea"
          readOnly
          value={selectedLog.content}
          cols="30"
          rows="10"
        />
      </div>
    </div>
  );
};
