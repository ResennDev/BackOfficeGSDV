import "./styles.scss";

interface CardProps {
  titulo: string;
  valor: string | number;
}

export function Card({ titulo, valor }: CardProps) {
  return (
    <div className="dashboard-card">
      <span>{titulo}</span>
      <strong>{valor}</strong>
    </div>
  );
}