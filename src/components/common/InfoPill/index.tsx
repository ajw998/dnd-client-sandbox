import { h } from 'preact';
import { memo } from 'preact/compat';
import styles from './styles.module.scss';

interface InfoPillProps {
  text: string;
  textColour?: string;
  bgColour?: string;
}

// TODO - Prevent pill box from overflowing parent div
const InfoPill = ({
  text,
  textColour = '#000',
  bgColour = '#fff',
}: InfoPillProps) => {
  return (
    <div
      className={styles['infoPill']}
      style={{ color: textColour, backgroundColor: bgColour }}
    >
      <b>{text.toUpperCase()}</b>
    </div>
  );
};

export default memo(InfoPill);
