import React from "react";
import Kumba from "../assets/images/Kumba.webp";
import images from "../assets/images/images.jpeg";
import Struct from "../assets/images/Struct.jpg";
import mandabam from "../assets/images/mandabam.png";
import nandi from "../assets/images/nandi.jpg";
import devasthanam from "../assets/images/devasthanam.jpg";
import thiruvanamali from "../assets/images/thiruvanamali.jpeg";
import thanjavur from "../assets/images/thanjavur.jpg";
import lingam from "../assets/images/lingam.jpg";
import nali from "../assets/images/nali.jpg";
import abhishekam from "../assets/images/abhishegam1.jpg";

const Kumbhabhishekam = () => {
  return (
    <div>
 <div className="flex flex-col md:flex-row items-center min-h-screen bg-gradient-to-r from-[#FFF2CC] to-[#FFECB3] px-6 py-16">
  {/* Left Side - Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-20">

  The Science of<span className="text-yellow-600"> Temple Kumbhabhishekam?</span>
    </h1>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-lg text-justify">
    Kumbhabhishekam is a vital Temple consecration ritual, as prescribed
            in the Agama Shastras. "Kumbha" means a sacred water pot, and
            "Abhishekam" is the pouring of sanctified water over deities and
            temple structures. This ceremony purifies and energizes the space,
            enhancing its spiritual power.
    </p>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-lg text-justify">
   Abhishekam, derived from Sanskrit, signifies "anointing" or "bathing"
          with a sacred purpose. It marks the culmination of extensive rituals,
          where holy water, sanctified through fire ceremonies, is poured over
          deities and temple towers. This act purifies the temple, enhances its
          divine energy, and establishes a spiritual connection, allowing
          celestial forces to bless devotees.
   </p>
  </div>

  {/* Right Side - Image Section */}
  <div className="w-full  flex justify-center items-center mt-6 md:mt-0">
  <img
  src={Kumba}
  alt="Temple"
  className="w-full h-auto max-w-xl md:max-w-2xl max-h-[600px] object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 mt-20"
/>

  </div>
</div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-5xl text-justify">
          <p className="leading-relaxed text-base text-black mx-16 mt-4">
            <span className="font-semibold">Nutana Kumbhabhishekam </span>is
            performed when a new temple or deity is consecrated. Unlike periodic
            reconsecration, this initial ritual involves additional ceremonies
            to purify the space, sanctify the materials, and establish a
            spiritual connection between realms. Since Devas reside in a higher
            dimension, they do not easily perceive the physical world, nor can
            humans directly interact with them. The consecration rituals create
            a bridge, allowing divine energies to flow freely, bestowing
            blessings and grace upon devotees. The Prana Pratishtha ceremony,
            conducted during this process, infuses divine energy into the deity,
            transforming an ordinary stone (bimba) into a sacred murti or
            vigraha, which is then venerated and worshipped daily as per
            scriptural traditions.
          </p>
          <p className="leading-relaxed text-base text-black mx-16 mt-2">
            In modern translations, the Sanskrit word vigraha is often
            incorrectly rendered as "idol," a term introduced with a derogatory
            intent. This misleading translation carries negative connotations,
            implying that Hindus believe the deity itself is God, rather than a
            sacred medium for divine presence. Instead, the more appropriate
            term would be murti or "icon," as these sacred images are designed
            to focus devotion and uplift the mind. They are not mere artistic
            representations but vessels of divine energy, consecrated through
            rituals that imbue them with spiritual power. While God is
            all-pervasive and beyond form, these murtis serve as tangible focal
            points for devotion, making divine communion more accessible to
            worshippers.
          </p>
          <p className="leading-relaxed text-base text-black mx-16 mt-2">
            After a Temple has been initially energized and consecrated, it is
            essential to re-consecrate it every 12 years to maintain its
            spiritual potency. Over time, the sanctity of the Temple begins to
            fade, and the herbal mortar known as ashta bandhanam, used to secure
            the vigrahas to their stone pedestals (peethams), starts to
            deteriorate. Since this mortar has a lifespan of 12 years, it must
            be replaced to ensure the structural and spiritual integrity of the
            Temple. During this period, necessary repairs and renovations are
            also carried out. However, since major renovations can disturb the
            energy balance of the sacred space, they are undertaken right before
            the kumbhabhishekam to restore and reinvigorate the Temple’s divine
            presence.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-justify">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img src={images} alt="" className="h-76 object-fill w-full mt-2" />
          </div>
          <div className="flex-1  text-justify">
            <p className="text-base text-black mt-2 leading-relaxed">
              Temples may require purification rituals earlier than the standard
              12-year cycle for various reasons. When a Kumbhabhishekam is
              performed to restore and re-energize a temple and its deities, it
              is known as Jeernoddharana Kumbhabhishekam. This sacred process
              helps revitalize the spiritual energy of the temple, ensuring the
              continued flow of divine blessings.
            </p>
            <p className="text-base text-black mt-2 leading-relaxed">
              According to the Agamas, there are four types of Jeernoddharana
              Kumbhabhishekam, each performed based on the temple’s condition
              and spiritual needs. These rituals help maintain the sanctity and
              divine energy of the temple:
            </p>
          </div>
        </div>
        <p className="text-base text-black mt-2 leading-relaxed">
          1. <span className="font-semibold">Anavardhana</span> – New
          Construction When new deities, temple towers (gopurams), or mandapams
          (halls) are added to an existing Temple, special ceremonies must be
          conducted to consecrate and integrate them into the sacred space.
        </p>
        <p className="text-base text-black mt-2 leading-relaxed">
          2.{" "}
          <span className="font-semibold">Punaravardhana Punaravardhana </span>{" "}
          – Reviving an Abandoned Temple If a Temple has been neglected or left
          unused for an extended period, rituals must be performed to
          re-establish its sanctity. This involves cleansing, repairs, and
          purification rituals to restore its spiritual energy.
        </p>
        <p className="text-base text-black mt-2 leading-relaxed">
          3.{" "}
          <span className="font-semibold">
            Aavardhana – Repair & Restoration{" "}
          </span>
          – Over time, Temples deteriorate due to natural wear and tear. Before
          the 12-year cycle, significant structural damage may require immediate
          repairs and re-consecration to prevent further degradation.
        </p>
        <p className="text-base text-black mt-2 leading-relaxed">
          4.{" "}
          <span className="font-semibold">
            Andharitham – Restoring Sanctity After Disturbance{" "}
          </span>
          – Certain events, both natural and unnatural, can disturb a Temple’s
          sacred energy. This includes natural disasters (floods, earthquakes,
          lightning), human disturbances (vandalism, arson, military conflict),
          or unfortunate events (unexpected deaths inside the Temple or the
          accidental entry of animals). In such cases, rituals are performed to
          purify and restore the Temple’s divine vibrations.
        </p>
        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 text-justify max-w-1/2">
            <p className="text-base text-black mt-2 leading-relaxed">
              The temple is meticulously designed, considering various aspects
              at every stage of its construction. From acquiring the land to
              laying the foundation, placing doorways and pillars, installing
              deities, flag poles, bali peethams, and completing temple towers,
              each step is consecrated. The temple's design aligns with the body
              and astrology of its founder. The founder’s body measurements
              serve as a unit to size different architectural elements of the
              temple. Additionally, the founder’s nakshatra (birth star)
              influences the direction of doors and other design features. The
              size and shape of the temple property are also carefully
              considered when determining the proportions of the Vigrahas (deity
              idols). The entire structure follows a harmonious alignment with
              the human body and the surrounding space. According to the sacred
              text, “deho devaalayah proktah jiivo devah sanaatanah,” meaning,
              "The body is a temple, and the embodied soul is, in essence, God
              eternal.
            </p>
          </div>

          {/*Image section  */}
          <div className="md:w-1/2">
            <img
              src={Struct}
              alt=""
              className="h-[400px] object-fill w-full mt-4"
            />
          </div>
        </div>
        <p className="text-base text-black mt-2 leading-relaxed">
          "Vastu Shastra, the ancient science of space, views a dwelling as an
          extension of the human body. In a mystical sense, the sacred temple
          represents not only the body of its human founder but also the entire
          creation as a microcosm of the universe.
        </p>
        <p className="text-base text-black mt-2 leading-relaxed">
          The temple’s architectural design mirrors the human body, with each
          part of the temple corresponding to specific human anatomy. The Garbha
          Griha (sanctum sanctorum), where the Vigraha (deity idol) is
          installed, is likened to the human face. Just as we recognize a person
          by their face, the Garbha Griha is where devotees have darshan (sight)
          of the divine, and it is where the Devas bestow their blessings. The
          Vimanam, the smaller tower situated directly above the Garbha Griha,
          is compared to the nose. Structurally, the nose is the most prominent
          feature of the face, and similarly, the Vimanam serves a functional
          and mystical role. It is designed to attract divine energies, just as
          the nose senses and draws in fragrances. The Vimanam helps channel
          celestial beings to the sanctum, enabling them to bless devotees
          through the offerings made within. This profound symbolism reinforces
          the deep spiritual and cosmic significance embedded in temple
          architecture.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={mandabam}
              alt=""
              className="h-[350px] object-fill w-full mt-4"
            />
          </div>
          {/* Content Section */}
          <div className="flex-1 text-gray-700 text-justify max-w-1/2">
            <p className="text-base text-black mt-2 leading-relaxed ">
              Many vimanas are adorned with gold, believed to have a mystical
              quality that helps open a window into the physical realm, making
              it easier for Devas to see. The golden vimanas are said to shine
              for miles, attracting celestial beings to temples and enhancing
              the spiritual energy of rituals. The ardha mandapam (the half-hall
              in front of the sanctum) represents the neck, while the Maha
              Mandapam (the large hall) symbolizes the chest. The vahana (divine
              vehicle) of the deity, positioned in front of the bali peetham and
              directly aligned with the garbha griham, can be likened to the
              heart. Each deity’s vahana embodies devotion and spiritual
              qualities necessary to approach divinity. For instance, the bull,
              symbolizing persistence and fearlessness in spiritual practice, is
              associated with Lord Shiva.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          {/* Left Image - Nandi with Bali Peedam */}
          <div className="w-full md:w-1/2">
            <img src={nandi} alt="" className="w-full h-[400px] object-cover" />
            <p className="text-center italic mt-2">Nandi</p>
          </div>
          {/* Right Image - Dhwaja Stambha Flag Pole */}
          <div className="w-full md:w-1/2 bg-white p-4">
            <img
              src={devasthanam}
              alt=""
              className="w-full h-[400px] object-fill"
            />
            <p className="text-center italic mt-2">
              Sanctified Temple Flagpole
            </p>
          </div>
        </div>
        <p className="text-base text-black mt-2 leading-relaxed">
          The <span className="font-semibold">Bali Peetham</span> represents the{" "}
          <span className="font-semibold">stomach</span> of the temple, where
          rice offerings are made to remove negative energies and preserve the
          sanctity of the sacred space. These offerings help pacify spiritual
          entities that might otherwise disturb the temple’s atmosphere.
          Positioned in front of the sanctum, the Bali Peetham plays a vital
          role in maintaining spiritual balance and purity within the temple
          premises.
        </p>
        <p className="text-base text-black mt-2 leading-relaxed">
          The <span className="font-semibold">Dwaja Stambha</span> (flagpole)
          symbolizes <span className="font-semibold">Jeevadhara</span>, the
          life-generating force. Often gilded in gold, it serves as a divine
          beacon, guiding celestial beings (Devas) to the temple, where they
          bestow blessings upon devotees. The flagpole is also likened to the
          <span className="font-semibold">human spine</span>, supporting the
          temple’s energetic flow just as the spine supports the body. It
          ensures that divine energy from the sanctum reaches the temple towers
          and extends to the surrounding community while also aiding in
          dispersing negative energies collected at the Bali Peetham.
        </p>
        {/* Image Section */}
        <img src={thiruvanamali} alt="" className="" />
        <p className="text-center italic mt-2">
          Raja Gopuram on the Famous Arunachaleshwara Temple in Tiruvannamalai.{" "}
        </p>

        {/* content section */}
        <p className="text-base text-black mt-2 leading-relaxed">
          The <span className="font-semibold">Raja Gopuram</span>Raja Gopuram,
          the grand entrance tower of the temple, is associated with the feet in
          symbolic terms. In the human body, the feet are believed to be a major
          exit point for energy. This is why touching someone with the feet is
          considered disrespectful, while touching the feet of holy individuals
          is seen as a way to receive blessings. In temples, devotees often rush
          to touch the feet of priests after important ceremonies, as these
          priests accumulate immense positive energy through hours of{" "}
          <span className="font-semibold">Vedic recitations</span>. Similarly,
          the <span className="font-semibold"></span>Raja Gopuram, positioned
          along the prakara (temple’s outer compound wall), is the farthest
          point from the garbha griha (sanctum), just as the feet are the
          farthest from the head in the human body.
        </p>
        <p className="text-base text-black mt-2 leading-relaxed">
          The{" "}
          <span className="font-semibold">
            significance of the Raja Gopuram
          </span>{" "}
          extends beyond the temple walls. These towering structures are
          designed to radiate the divine blessings of the presiding deity to the
          surrounding areas. A properly consecrated gopuram can transmit
          spiritual energy over a distance of more than{" "}
          <span className="font-semibold">150 miles (around 90 km)</span>. This
          is why many Hindus prefer to live near a temple—to remain within its
          powerful spiritual energy field. The prakara (compound walls)
          enclosing the temple are said to represent the five senses. While
          simpler temples may have only one prakara, grand temples often have
          multiple layers, sometimes five or more. Just as the five senses shape
          our perception of the world, the prakara serves as both a protective
          boundary and a spiritual filter, ensuring the sanctity of the temple
          remains intact.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={thanjavur}
              alt=""
              className="h-[350px] object-fill w-full mt-4"
            />
            <p className="text-center italic mt-2">
              Sculptural Marvel of Brihadishvara Temple: A Testament to Chola
              Art and Architecture
            </p>
          </div>
          {/* Content Section */}
          <div className="flex-1 text-gray-700 text-justify max-w-1/2">
            <p className="text-base text-black mt-2 leading-relaxed ">
              Entering a temple symbolizes the spiritual journey within oneself.
              The outer walls are adorned with intricate ornamentation, often
              depicting scenes of worldly existence, including daily life,
              battles, and desires, representing the chaos of Maya and the
              influence of the five senses. As one moves deeper, the imagery
              shifts to depictions of Gods, Goddesses, and sacred stories that
              impart wisdom. This transition signifies the shift from worldly
              consciousness to spiritual awareness, guiding devotees from
              seeking material pleasures to embracing dharma, wisdom, and
              self-realization. qualities necessary to approach divinity. For
              instance, the bull, symbolizing persistence and fearlessness in
              spiritual practice, is associated with Lord Shiva.
            </p>
          </div>
        </div>
        <p className="text-base text-black mt-2 leading-relaxed">
          As we move toward the center of the Temple, the ornamentation becomes
          simpler, and the colors fade, symbolizing a transition from the
          external world to inner stillness. The garbha griha, where the deity
          resides, is often plain and minimalistic, contrasting with the vibrant
          Temple towers. This sacred chamber, known as sannidhi, meaning
          “proximity” in Sanskrit, is where devotees experience darshan and
          receive divine blessings. The simplicity of the sannidhi ensures focus
          on spiritual connection rather than external distractions. As one
          moves deeper into the Temple, the surroundings grow darker,
          representing the meditative journey—where facing inner darkness leads
          to the realization of divine light, just as closing the eyes in
          meditation awakens spiritual vision.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          {/* First Image and Caption */}
          <div className="md:w-4/1 mt-4">
            <img
              src={lingam}
              alt=""
              className="w-full md:w-[600vh]  h-[400px]"
            />
            <p className="text-center italic mt-2">
              Row of Shiva Lingams at Brihadeeswarar Temple
            </p>
          </div>
          {/* Text Content */}
          <div className="">
            <p className="text-base text-black mt-2 leading-relaxed">
              In South India, the Vigraha (idol) of the deity is typically made
              of plain black granite, embodying simplicity and divinity. The
              Temple's design also incorporates depictions of demonic beings,
              serving both symbolic and spiritual purposes. Around the Vigrahas,
              metal thiruvachis (arches) often feature yakshas and makaras, two
              fearsome spiritual beings. Similarly, nasis, the horseshoe-shaped
              niches adorning Temple towers, also depict such beings. These
              elements serve as a reminder that divinity exists in all aspects
              of existence—both in virtuous beings and in those driven by ego
              and worldly desires. They also symbolize the spiritual challenges
              one may face, emphasizing that before realizing divine light, one
              must first confront the darkness within.
            </p>
          </div>
          {/* Second Image and Caption */}
          <div className="text-center mt-4">
            <img
              src={nali}
              alt=""
              className="w-full md:w-[700vh] h-[400px] object-cover"
            />
            <p className="text-center italic mt-2">
              Dravidian Temple Cupola, Thiruchirapalli
            </p>
          </div>
        </div>

        <p className="text-base text-black mt-2 leading-relaxed">
          The consecration of a Temple is a grand and intricate event that
          requires the participation of hundreds of people, including highly
          trained Vedic priests (Purohits). These ceremonies involve elaborate
          offerings that are both costly and labor-intensive, making it a
          collective community effort. Every aspect must be meticulously planned
          according to sacred scriptures and carefully timed by an expert
          astrologer. When new images are installed for the first time, special
          rituals are performed to purify and infuse them with divine energy,
          transforming mere stone (bimba) into a sacred manifestation of God
          (Vigraha). The most significant ritual in this process is Prana
          Pratistha, which means the "establishment" (pratistha) of "life" or
          "breath" (prana). Since God is the essence of life, this ceremony
          invokes the divine presence into the image, ensuring that blessings
          flow from the spiritual realm into the physical world. Though the
          Vigraha itself is not considered God, it becomes a sacred focal point
          for devotion, holding divine energy and serving as a bridge between
          the spiritual and material worlds.
        </p>
        <p className="text-base text-black mt-2 leading-relaxed">
          Before installation, newly carved images undergo extensive
          purification rituals. They are cleansed using sacred substances such
          as mud from the Ganges or other holy rivers, cow dung, crushed
          bananas, ash, and tamarind in a process called Murti Samskara,
          performed 32 times. To remove any negative energy (drishti) absorbed
          by the temple icons or structures, offerings like coconuts, ash
          gourds, and limes are broken in large numbers. The statues also
          undergo Bimba Shuddhi, a purification ceremony where they are bathed
          with Pancha Gavya—five sacred substances from the cow (milk, ghee,
          yogurt, dung, and urine)—which are first consecrated through Vedic
          chants and a sacred fire ritual (homam) called Brahma Kurcha.
          Following this, the images are washed again with rice flour and warm
          water. These rituals not only cleanse the physical statues but also
          remove residual energies from the sculptors (shilpi dosha) and others
          who have handled or transported them, ensuring that the divine
          presence can fully manifest.
        </p>
        <div className="place-items-center mt-4">
          <img
            src={abhishekam}
            alt=""
            className="w-2/3 h-[500px] object-cover"
          />
          <p className="text-base text-black mt-2 leading-relaxed">
            The consecration of a temple is a meticulously planned and
            spiritually significant event. One of the key rituals in this
            process is Netra Unmeelanam, or the "eye-opening" ceremony of the
            deity's idol (Vigraha). Until the time of consecration, the eyes of
            the idol remain unfinished. During this sacred ritual, the final
            carving of the pupils is performed while Vedic priests chant special
            Netronmeelanam mantras and conduct homams (fire rituals). Offerings
            of consecrated ghee, honey, and special herbs are made to empower
            the process. A gold rod with a diamond tip is used to carve the
            eyes, as both gold and diamonds are believed to enhance spiritual
            channels, allowing the Devas to perceive the physical realm. Often,
            a special anjanam (collyrium) made with herbs and sacred ash from
            the homam is applied to the eyes of the deity. This entire process
            is conducted with utmost sanctity, and the deity remains screened
            from public view until completion.
          </p>
          <p className="text-base text-black mt-2 leading-relaxed">
            Before devotees can have darshan (sight of the deity), the Lord is
            first shown Dasha Darshanam—ten sacred objects that hold deep
            mystical significance. These may include a cow with its calf (after
            Go Puja), an elephant, a mirror, gold, scriptures, a saint, a
            renunciate (sannyasi), a young girl (kanya), a married woman
            (sumangali), and a king (raja). These objects are believed to hold
            symbolic meaning for divine blessings and spiritual vision. The
            temple remains dimly lit during this phase, using only natural ghee
            lamps. When the veil is finally removed, it symbolizes the removal
            of maya (illusion) through meditation and devotion, allowing
            devotees to receive divine blessings.
          </p>
          <p className="text-base text-black mt-2 leading-relaxed">
            The installation of a new murti (idol) involves placing it on a
            peetham (sacred pedestal or stone base) using a powerful herbal
            adhesive known as Ashta Bandhana, which contains sacred herbs.
            Inside the peetham, a chamber is created to hold Sthapana Yantras
            (mystical diagrams), Nava Ratnas (nine precious gems), Sapta Dhatus
            (seven metals), and sacred herbs. The yantras, engraved on gold,
            silver, or copper plates, contain bijaksharas (seed mantras) of the
            deity, enhancing divine energy. The Nava Ratnas, representing the
            nine planets in Vedic astrology, include Ruby (Sun), Pearl (Moon),
            Red Coral (Mars), Emerald (Mercury), Yellow Sapphire (Jupiter),
            Diamond (Venus), Blue Sapphire (Saturn), Hessonite Garnet (Rahu),
            and Cat’s Eye Chrysoberyl (Ketu). The Sapta Dhatus, or sacred
            metals, include gold, silver, copper, zinc, lead, tin, and iron.
            Additionally, mercury (linked to Lord Shiva) and sulfur (linked to
            Goddess Parvati) are purified and included, following ancient
            Ayurvedic alchemical methods.
          </p>
          <p className="text-base text-black mt-2 leading-relaxed">
            The final energization of the deity involves Nyasa, a ritual in
            which mantras are used to invoke divine energy into different parts
            of the idol. Different traditions also use herbal pastes to activate
            the nadis (subtle energy channels). Nyasa rituals are performed for
            various cosmic aspects, including the Sapta Rishis (seven sages),
            the Navagrahas (nine planets), the 27 Nakshatras (lunar
            constellations), and the 36 Tattvas (elements of creation).
          </p>
          <p className="text-base text-black mt-2 leading-relaxed mb-5">
            The climax of the consecration ceremony is Kumbhabhishekam, which
            follows several days of homams (fire rituals) to energize sacred
            water in hundreds or even thousands of kalashas (holy pots). This
            water, infused with divine vibrations, is then poured over the deity
            and temple structures. It is believed that this powerful ritual
            unites the three realms—the divine (Devas), the spiritual (Rishis),
            and the earthly (devotees). Participating in or witnessing a
            Kumbhabhishekam is considered a rare and profound blessing, as it
            allows one to receive immense divine grace and spiritual
            transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kumbhabhishekam;
