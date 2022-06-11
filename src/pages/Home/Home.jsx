import React from "react";
import { motion } from "framer-motion";
import Styles from "./Home.module.scss";

function Home() {
  return (
    <div className={Styles.home}>
      <motion.div
        drag="x y"
        initial={{ opacity: 0.1, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={Styles.home_wrapper}
      >
        <div className="">
          <h1 className={Styles.home_title}>Mahir Uslu</h1>
          <h2 className={Styles.home_title_sub}>Software Developer</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima
          qui asperiores porro, molestias esse ducimus enim est eveniet labore
          quos praesentium maiores cumque corporis aspernatur, quibusdam fugiat
          doloremque doloribus? Lorem Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Neque, deleniti saepe. Alias iste quasi repellat
          iure commodi? Repellendus animi corporis ipsum incidunt. Suscipit
          maiores laudantium, voluptatibus cumque ipsum vitae iusto? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur obcaecati
          aspernatur odio corporis maiores! Quisquam, quidem, quisquam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus aut
          voluptas aliquam quaerat commodi ipsa pariatur repellat et quis quo
          maiores rem velit, ut dicta, odio deleniti tempore dolorem
          consequuntur culpa veniam optio, veritatis quasi! Amet sunt suscipit
          quos illo. Sunt repellendus libero nobis quo at dolor, architecto
          fugiat animi iusto neque accusantium? Similique veniam quaerat
          deleniti, ipsum laborum voluptatum itaque porro, dolorum quae
          consectetur dolor minima aperiam, cum ut obcaecati officia nam nobis
          sed accusamus, dolor nam harum laudantium perspiciatis. Accusantium
          inventore nisi velit minus eligendi accusamus atque cumque doloremque
          distinctio maiores, sit soluta mollitia debitis saepe ducimus sequi
          et? Quisquam, cumque, deserunt atque voluptatum aspernatur tempora
          harum nisi quaerat soluta voluptates aperiam. Vitae ut ex sapiente
          autem eveniet cumque dicta blanditiis quae temporibus quaerat maiores
          obcaecati voluptate ipsa delectus in, cum magni animi reprehenderit
          voluptates provident quidem. Exercitationem quisquam autem, saepe
          maiores ullam rerum, quos maxime quidem, similique nesciunt porro
          beatae illum omnis deleniti magnam laudantium non consequuntur iure?
          Earum a vel reiciendis molestiae accusantium, nam id nesciunt facilis
          consequatur modi quia hic eligendi. Ex, consequuntur qui sunt nulla
          doloribus doloremque, minima autem aliquid earum tempore,
          exercitationem voluptatibus expedita odio ea? Doloribus reprehenderit
          a sunt repellendus architecto tempora. Totam repellat eos optio
          dolorum amet dolores incidunt ratione similique, unde ea nisi, dolor
          ipsum adipisci in! Corrupti natus cumque nulla! Itaque suscipit
          aliquid numquam incidunt cum magni quaerat asperiores quibusdam optio
          saepe blanditiis, exercitationem ullam ipsum autem eveniet architecto,
          atque id quidem sit nobis dolorem ex commodi soluta. Maiores corporis
          quam tempora, at soluta sequi dolor impedit, hic recusandae excepturi
          consequatur corrupti? Tempore aut, quo reprehenderit sunt modi
          consequatur, illo earum rem animi itaque nobis quibusdam accusamus?
          Natus, ex sint delectus optio quos voluptas culpa veniam expedita
          ullam sequi omnis aspernatur eveniet fuga facilis, porro voluptatem
          totam nemo commodi, earum quod minus laborum? Voluptatum,
          reprehenderit sequi accusantium nulla ducimus quos aut, amet illum
          assumenda inventore voluptatem est eveniet qui, recusandae mollitia
          impedit? Eius soluta ullam molestias doloremque in voluptas molestiae
          veritatis at facere iste cupiditate veniam magni accusantium delectus
          corrupti libero fuga mollitia, debitis pariatur. Iste, maiores
          laudantium? Repudiandae neque in voluptate ipsam excepturi accusamus
          maxime id officia, provident molestias mollitia laborum laboriosam
          sequi. Id odio quia sint veritatis, quas odit accusamus nulla iusto
          tenetur veniam? Consequuntur doloribus sapiente veniam dignissimos.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
