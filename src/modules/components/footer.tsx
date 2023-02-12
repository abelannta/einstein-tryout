export const Footer = () => {
  return (
    <footer className="p-10 bg-background">
      <div className="container mx-auto footer text-neutral-content">
        <div>
          <div>
            <a className="normal-case text-2xl font-bold">
              Nine
              <span className="text-bold">Intelligence</span>
            </a>
            <p className="text-base max-w-md mt-3">
              Kami menyediakan berbagai macam latihan soal pada Eintstein Smart
              Tryout untuk belajar memasuki universitas impian
            </p>
          </div>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <div>Twitter</div>
            <div>Facebook</div>
            <div>Instagram</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
