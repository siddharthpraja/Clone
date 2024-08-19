

import Button from "./Darkmode";

const Footer = () => {
  return (
    <div>
        <div className="pt-10 flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900  ">
          <Button />
          <div className="py-5">
          Developed by Gautam Praja
          </div>
          
        </div>
    </div>
  );
};

export default Footer;
