import { ReactNode } from "react";

type Props = {
  title?: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  children: ReactNode;
  header?: ReactNode;
};

export default function Card({ title, children, onClick, header }: Props) {
  return (
    <li
      className="card w-60 h-60 bg-secondary shadow-2xl hover:bg-secondary-focus transition"
      onClick={onClick}
    >
      <div className="card-body max-h-full">
        <div className="flex gap-2 justify-between items-start">
          {title && <h2 className="card-title text-2xl">{title}</h2>}
          <div className="flex gap-1 flex-col">{header}</div>
        </div>
        {children}
      </div>
    </li>
  );
}
