interface footerContactDataTypes {
  Heading: string;
  infoData: {
    name: string;
    link: string;
  }[];
}

const FooterContactDataLoopOver = ({
  infoData,
  Heading,
}: footerContactDataTypes) => {
  return (
    <div>
      <div>
        <p className="text-white text-2xl  my-3 font-bold">{Heading}</p>

        <div className="flex flex-col">
          {infoData.map((info) => {
            return (
              <div key={info.name} className="text-white">
                <a href={info.link}>{info.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterContactDataLoopOver;
