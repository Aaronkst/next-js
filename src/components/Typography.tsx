type Props = {
  title: string;
  white?: boolean;
};

const SectionHeader = ({ title, white = false }: Props): JSX.Element => {
  return (
    <p
      className={
        white
          ? "text-center block font-extrabold text-4xl md:text-6xl my-9 text-white"
          : "text-center block font-extrabold text-4xl md:text-6xl my-9 text-indigo-600"
      }
    >
      {title}
    </p>
  );
};

export { SectionHeader };
