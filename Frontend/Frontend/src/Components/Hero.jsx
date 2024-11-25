


import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <p className="p-first">TOTAL HEALTHCARE SOLUTION</p>
          <h2 className='title'>{title}</h2>
          <p className="line">
            "Empowering healthcare through innovation, our hospital management website seamlessly
            connects patients, providers, and administrators, ensuring efficient, high-quality care
            for every individual."
          </p>
          <div className="image-button">
            <button className="image-button1">Get Started</button>
            <Link to = "/services"  >
              <button className="image-button1">Services</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <div className="content-box">
          <h2>Why Choose Us?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit maxime nostrum sapiente molestias reiciendis officiis maiores mollitia, eius eaque nobis tenetur accusantium molestiae tempora in ipsam ratione quae voluptatibus cupiditate. Itaque temporibus dolores consectetur aliquid nisi sapiente, accusamus culpa ratione modi cupiditate aperiam. Ea aut dolore doloremque dolorum nesciunt commodi officia fugit facere perspiciatis recusandae illo eos minus numquam error veritatis delectus incidunt eaque natus temporibus sed, molestiae excepturi dolores nihil. Temporibus dolor odit itaque possimus, velit beatae ipsam delectus hic nihil impedit obcaecati illum officiis quae vitae fuga? Nesciunt odio eum id, delectus est modi esse incidunt vel hic unde fugiat quo fugit eveniet asperiores, voluptatibus repellat nobis nam, nisi dolorum omnis temporibus dicta? Nihil voluptatum corrupti accusamus odit in, repellat ipsam sapiente itaque dicta ipsum reiciendis tenetur fuga obcaecati nostrum illum suscipit beatae vero exercitationem dignissimos qui error ab laboriosam rem? Officiis maxime quam dolorum perspiciatis ipsam, ipsa consectetur dicta reiciendis amet eveniet iure reprehenderit! Dolorum officia commodi autem, quaerat cupiditate eveniet ut est illum esse reiciendis voluptates explicabo minus? Eaque expedita perferendis consectetur nesciunt sit harum iusto tempora sunt minus laboriosam ad, accusamus suscipit amet nam sapiente veritatis dolores dignissimos fuga ullam, eveniet ipsa. Repellendus, accusamus maxime.
          </p>
          <button>Learn More</button>
        </div>
        {}

      </div>
    </>
  );
};

export default Hero;
