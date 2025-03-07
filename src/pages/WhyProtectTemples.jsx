import React from "react";
import Temple from "../assets/images/Hindus.jpg";
import Signifiant from "../assets/images/Signifiant.jpeg";

const WhyProtectTemples = () => {
  return (
    <div>
     <div className="flex flex-col md:flex-row items-center min-h-screen bg-gradient-to-r from-[#FFF2CC] to-[#FFECB3] px-6 py-16">
  {/* Left Side - Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-20">

      Why Protect <span className="text-yellow-600">Temples?</span>
    </h1>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-lg">
      For thousands of years, Hindus have built temples as the abode of their deities, 
      creating central places in cities, towns, and villages where communities gather 
      for spiritual pursuits.
    </p>
   
  </div>

  {/* Right Side - Image Section */}
  <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
    <img
      src={Temple}
      alt="Temple"
      className="w-full h-auto max-w-xl md:max-w-2xl max-h-[600px] object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 mt-20"
    />
  </div>
</div>



      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-5xl text-justify">
          <p className="leading-relaxed mb-4 text-base text-black mx-16 ">
            Hindu temples are powerful centers of divine energy, where
            enlightened masters and Rishis have meditated for centuries. The
            deities enshrined in these temples are not just idols but living
            divine manifestations that respond to prayers and radiate healing
            energy. Temples provide a sacred space for devotees to connect with
            their ishta devata, aiding in their spiritual evolution. Built by
            kings and sages as enlightenment ecosystems, these temples are
            integral to Hindu spirituality. Their destruction is not merely the
            loss of a structure but a disruption of a spiritual lifeline. Once a
            deity is desecrated, damaged, or displaced, it loses its divine
            energy, affecting the sanctity of the temple. The destruction of
            Hindu temples, therefore, is an attack on the spiritual and cultural
            foundation of Hindus and seekers worldwide.
          </p>
          <p className="leading-relaxed mb-4 text-base text-black mx-16">
            Hindu temples also stand as unparalleled masterpieces of
            architecture, combining artistic brilliance with deep scientific
            knowledge. Even the smallest, most remote temple displays intricate
            carvings, precise spatial arrangements, and unique astronomical
            alignments, such as sunlight falling on the deity at specific times.
            Ancient architects, adept in Vastu Shastra, constructed temples
            based on cosmic principles, ensuring harmony and divine resonance.
            The Tanjore Golden Temple, covered in gold, is an example of this
            architectural magnificence. Unfortunately, the expertise required to
            construct such temples is rapidly vanishing, with only a few skilled
            architects left. Beyond their artistic and spiritual significance,
            Hindu temples serve as cultural and social hubs, especially in
            regions where Hindus are a minority. They unite communities,
            preserve traditions, and offer a stronghold against external
            threats, including forced conversions. Without temples, Hindus lose
            not just a place of worship but a vital support system that
            safeguards their faith and identity.
          </p>
          <div className="max-w-4xl mx-auto">
            <h3 className="bg-gray-800 text-yellow-500 text-center text-xl p-1">
              The Spiritual and Cultural Significance of Hindu Temples
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Content Section */}
              <div className="flex-1 text-gray-700">
                <p className="text-base text-black  mt-2">
                  Hindu temples have historically been the heart of settlements,
                  where daily life revolved from dawn to dusk. The morning would
                  begin with the ringing of temple bells, followed by the sacred
                  offering of arti. Devotees would receive naivedyam, and the
                  rest of the day was dedicated to preparations for the
                  naivedyam, decorating the deities, studying scriptures,
                  chanting mantras, and engaging in spiritual activities.
                  Another arti would conclude the day. In ancient times, temples
                  were the epicenter of cultural and spiritual life in Hindu
                  towns and cities. Designed to captivate all six senses,
                  temples uplifted devotees, providing them with solace and
                  spiritual guidance.
                </p>
                <p className="text-base text-black mt-2 ">
                  The importance of temples has undergone significant
                  transformation over the past 1500 years. Before the arrival of
                  invaders and colonial powers, India was known as Akhand
                  Bharat, covering much of South Asia. This historical grandeur
                  is evident in the majestic, intricately carved Hindu temples
                  found across the region. These architectural marvels continue
                  to stand as timeless symbols of devotion, culture, and
                  artistic excellence.
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  src={Signifiant}
                  alt="Significance of Hindu Temples"
                  className="h-96 object-cover w-full mt-2"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-16">
            <p className="text-base text-black mt-2">
              Temples play a vital role in preserving cultural traditions,
              hosting vibrant festivals like Navaratri, Diwali, and Maha
              Shivaratri, where people gather to celebrate with devotion and
              joy. These temples also support educational and social welfare
              initiatives, offering food, shelter, and learning opportunities to
              devotees and the underprivileged. They serve as centers of moral
              and ethical teachings, guiding individuals toward a righteous path
              while reinforcing a sense of belonging and faith.
            </p>

            <p className="text-base text-black mt-2">
              Despite challenges like neglect, encroachment, and modernization,
              efforts are being made to protect and restore these sacred
              structures. Various organizations and devotees are working to
              preserve their historical and spiritual essence, ensuring that
              future generations can continue to experience their divine energy.
              Hindu temples remain a timeless symbol of devotion, culture, and
              architectural brilliance, upholding the rich heritage of Sanatana
              Dharma.
            </p>
          </div>
          <div className="max-w-4xl mx-auto ">
            <h3 className="bg-gray-800 text-yellow-500 text-center text-xl p-1 mt-4">
              The Growing Challenges Facing Hindu Temples Today
            </h3>
            <div className="flex-1">
              <p className="text-base text-black  mt-2">
                Hindu temples, which have been the heart of spiritual and
                cultural life for centuries, are facing multiple challenges in
                the modern era. One of the biggest issues is government control
                over temple administration through the Hindu Religious &
                Charitable Endowment (HR&CE) Act. This law allows state
                governments to appoint officials to temple boards, manage temple
                wealth, and oversee religious affairs. While it was initially
                introduced for better governance, in practice, it has led to the
                mismanagement and diversion of temple funds. Large sums of
                donations made by devotees for the growth and maintenance of
                temples are being redirected for non-religious purposes,
                depriving temples of the resources needed for their preservation
                and development. If this continues, many temples may fall into
                neglect and disrepair.
              </p>
              <p className="text-base text-black  mt-2">
                Another significant challenge is the destruction and relocation
                of temples in the name of urban development and infrastructure
                expansion. Many ancient temples, which hold historical,
                architectural, and religious significance, have been demolished
                to make way for roads, highways, and government projects. In
                states like Tamil Nadu and Odisha, numerous temples have been
                razed without proper efforts to preserve their heritage. This
                disregard for sacred structures erases cultural history and
                disrupts the spiritual lives of devotees who have worshipped at
                these temples for generations. It is crucial to find a balance
                between modernization and heritage conservation.
              </p>
              <p className="text-base text-black  mt-2">
                Judicial interference in temple matters is another growing
                concern. Courts, which do not specialize in Hindu temple
                traditions or the intricacies of religious rituals, often pass
                judgments that dictate how temples should function. Decisions
                regarding temple entry, rituals, and even whether lamps should
                be lit inside temples are being made by legal authorities rather
                than religious scholars and priests. This intrusion undermines
                the autonomy of Hindu religious institutions and disrupts
                age-old customs that have been followed for centuries. A deeper
                understanding of Hindu customs is necessary before making legal
                decisions that impact religious practices.
              </p>
              <p className="text-base text-black  mt-2">
                Apart from administrative and legal issues, Hindu temples also
                face threats from vandalism and targeted attacks. In various
                parts of India and neighboring countries, temples have been
                desecrated, idols have been damaged, and sacred spaces have been
                defiled. In some cases, extremist groups with anti-Hindu
                sentiments have intentionally targeted temples, yet there is
                often little legal action taken against the perpetrators. The
                lack of security and strong legal protections leaves Hindu
                temples vulnerable to such attacks. Strengthening laws and
                increasing security measures can help protect these temples from
                further harm.
              </p>
              <p className="text-base text-black  mt-2">
                Furthermore, private temples that are not under government
                control face financial discrimination. Unlike religious
                institutions of other faiths, Hindu temples do not receive tax
                exemptions on donations unless they are under government
                administration.
              </p>
              <p className="text-base text-black  mt-2">
                This discourages large-scale donations to independent temples,
                limiting their ability to maintain and expand their activities.
                At the same time, government-controlled temples, despite
                receiving tax-exempted donations, do not benefit from them, as
                the funds are often used for purposes unrelated to Hindu
                religious causes. Providing equal financial benefits to all
                Hindu temples can help in their sustainability and development.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto ">
            <h3 className="bg-gray-800 text-yellow-500 text-center text-xl p-1 mt-4">
              A Summary of Invasions on Hindu Temples
            </h3>
            <div className="flex-1">
              <p className="italic text-center p-2">
                "Temples are not just structures of stone; they are the soul of
                our civilization."
              </p>
              <p className="text-base text-black  mt-2">
                The history of the Indian subcontinent is complex, with many
                interpretations shaped by historians over time. Hindus, the
                indigenous people of the region, endured numerous invasions from
                foreign forces between approximately 600 AD and India's
                independence in 1947. Among these, the Islamic conquests were
                particularly devastating, as many rulers sought not only
                territorial expansion but also the destruction of Hindu cultural
                and religious sites. Temples, which stood as symbols of
                spiritual and artistic excellence, were frequently desecrated,
                with idols being defaced or destroyed. In addition to plundering
                wealth, invaders often captured women and children, forcibly
                converting them to their faith, believing that idol worship
                contradicted their religious principles.
              </p>
              <p className="text-base text-black  mt-2">
                During the colonial era, British rule further weakened the
                temple ecosystem by imposing heavy taxes and seizing control of
                temple administration. The British redirected temple revenues,
                which were traditionally used for education and social welfare,
                into government coffers. They also introduced legal frameworks
                that allowed state interference in temple affairs, disrupting
                traditional management systems.
              </p>
              <p className="text-base text-black  mt-2">
                The scale of destruction inflicted on Hindu temples can be
                understood by examining the actions of Mahmud of Ghazni, one of
                the most notorious invaders. He led multiple campaigns into
                India, driven by both a thirst for wealth and a mission to
                eliminate idol worship. His attacks on renowned temples,
                including the Somnath temple, resulted in immense cultural and
                religious losses. However, despite such repeated assaults, Hindu
                civilization persisted, with its traditions and temples standing
                as a testament to resilience and devotion.
              </p>
              <p className="text-base text-black  mt-2">
                To fulfill his mission, Mahmud of Ghazni led numerous invasions,
                targeting cities and demolishing their temples. In Thanesar, one
                of the city's revered deities was seized and taken to Ghazni,
                where it was thrown onto the streets to be desecrated by his
                followers. His campaign extended to Mathura, where he set fire
                to the grand Keshav Rai Temple, believed to be the birthplace of
                Bhagwan Krishna, and plundered its immense wealth. The infamous
                destruction of the Somnath Temple saw the looting of treasures
                worth nearly 20 million dirhams in gold, silver, and precious
                stones, along with the desecration of its main deity.
              </p>
              <p className="text-base text-black  mt-2">
                Each successive Islamic invader sought to outdo his predecessors
                in terms of destruction, temple desecration, and forced
                conversions of Hindus to Islam. Over centuries, thousands of
                sacred sites were ravaged, looted, and left in ruins as part of
                an effort to suppress Hindu religious practices and beliefs.
              </p>
              <p className="text-base text-black  mt-2">
                As the power of Islamic rulers waned, European colonial
                forces—Portuguese, Dutch, French, and British—established
                control over various parts of India. Under Portuguese rule,
                Hindus faced relentless persecution for over 450 years. The
                Portuguese, being staunch Christians, viewed Hinduism as
                heretical and implemented strict measures to suppress it. Hindus
                were imprisoned, subjected to extreme brutality, and forbidden
                from practicing their religion in public. The construction and
                maintenance of temples came to a halt, and many once-glorious
                structures were left to deteriorate over time.
              </p>
              <p className="text-base text-black  mt-2">
                During British rule, Hindus were allowed to practice their
                religion, but the British administration viewed it with deep
                contempt. Christian missionaries spread false and exaggerated
                accounts of Hindu traditions, labeling them as barbaric. The
                Jagannath Temple’s Rath Yatra was misrepresented as a primitive
                and cruel ritual, and pilgrims were taxed for participating in
                temple activities, with a portion of these funds redirected to
                the British Empire instead of temple upkeep. British policies
                subtly eroded Hindu religious institutions by introducing legal
                frameworks that gave the colonial rulers control over temple
                administration. The British also looted temple treasures,
                including the famous Kohinoor diamond from the Somnath Temple.
                Furthermore, they dismantled the Gurukul education system and
                imposed their own curriculum, which weakened the deep-rooted
                connection between temples and learning. Once thriving centers
                of cultural and spiritual activity, Hindu temples were gradually
                reduced to mere relics of the past, visited only on rare
                occasions.
              </p>
            </div>
          </div>
        </div>{" "}
      
      </div>
    </div>
  );
};

export default WhyProtectTemples;
