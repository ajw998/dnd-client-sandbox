import { h } from 'preact';

export interface HealthBlockProps {
  maxHp: number;
  currentHp: number;
  tempHp: number;
}

export const HealthBlock = ({
  maxHp,
  currentHp,
  tempHp,
}: HealthBlockProps) => {
  return (
    <div>
      {currentHp} / {maxHp}
    </div>
  );
};
