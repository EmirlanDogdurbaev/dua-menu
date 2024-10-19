// eslint-disable-next-line react/prop-types
import Nav from "../Nav/Nav.jsx";
import Header from "../Header/Header.jsx";
import classes from "./Layout.module.scss";
import {Logo} from "../Logo/Logo.jsx";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return (
        <div className={classes.Layout}>
            <div className={classes.navbar}>
                <Nav/>
                <section>
                    <Logo/>
                    <Header/>
                </section>
            </div>
            <main>
                {children}

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet at beatae illo minus nobis
                    odit officiis quo recusandae ullam? A ad animi at autem, commodi deserunt doloribus eaque enim esse
                    iusto labore laborum maiores, molestiae nesciunt numquam perferendis quasi qui quia quis ratione
                    reprehenderit similique sunt unde. Animi asperiores at atque aut beatae cum cupiditate deleniti
                    distinctio, exercitationem ipsa ipsum iste magnam maxime minima molestias nemo nesciunt nulla odio
                    pariatur perferendis possimus quas quos reiciendis reprehenderit sapiente sint, sit veniam veritatis
                    vitae voluptas? A ab, asperiores aspernatur consequatur, dignissimos eum inventore ipsam laboriosam
                    magni molestiae necessitatibus odio quia repellendus saepe sed sequi temporibus voluptates.
                    Asperiores at delectus dicta ducimus eos esse illo in inventore, iusto magni necessitatibus non
                    nulla officiis quia, quibusdam rerum tenetur ullam voluptates? Aliquid, aperiam cum doloremque error
                    illo ipsa laborum, molestiae molestias possimus praesentium quam suscipit. Accusantium at aut
                    deleniti dolore fuga ipsa libero nobis non nulla numquam placeat praesentium provident quae quas
                    quasi quidem repudiandae sed sint sit suscipit tempore totam, unde! Aut cumque excepturi iure
                    repellat vero! Aperiam dicta eius exercitationem expedita nesciunt officiis quis rem repellat
                    tenetur voluptatem. Adipisci hic itaque iusto molestiae quasi. A ad aliquam amet aperiam atque
                    blanditiis corporis, culpa cupiditate deleniti dolore dolorem dolores eius eligendi eveniet
                    exercitationem hic in incidunt iste molestias, nostrum officiis quia quibusdam quod, repellendus
                    velit vitae voluptatem voluptatibus. A animi at autem, commodi consectetur, cum dolor dolorum eaque
                    error expedita fugiat hic illo iste itaque iusto magnam magni maiores maxime nam neque nihil nobis
                    nostrum nulla obcaecati officiis optio quasi qui recusandae repellat reprehenderit sed sequi sit
                    totam ullam velit veritatis vitae? Cum cumque distinctio, hic iusto libero nesciunt soluta velit.
                    Assumenda commodi, distinctio explicabo hic id itaque laborum laudantium minima mollitia! Accusamus
                    aliquam animi, architecto commodi consequuntur cumque dicta dolor doloribus ducimus facilis harum
                    illo inventore ipsa iste iure, laborum nam, nulla rem repellendus reprehenderit sint totam vitae
                    voluptate. A ad consectetur doloremque est id laborum minus molestiae nobis quod unde? Accusantium
                    amet dolores error fuga molestiae quaerat quam ratione rem sit. Deserunt dolor eius ex itaque labore
                    laborum officiis placeat qui ratione veritatis! A, accusantium aliquam consectetur cum dolorem
                    dolorum ducimus enim ipsam ipsum magnam maiores necessitatibus non obcaecati odit omnis quasi qui
                    quidem quod rem rerum temporibus ut velit veniam voluptatem, voluptates. Consequatur et minima nam
                    obcaecati! Accusamus alias consectetur cupiditate dignissimos doloremque ex fugiat harum ipsam iure
                    libero modi nihil nostrum placeat quo, reprehenderit rerum sit, tempore velit. A adipisci atque
                    consectetur debitis labore libero nemo sed totam voluptas. Accusamus aspernatur consequuntur ducimus
                    impedit inventore iure placeat quaerat quidem ratione recusandae saepe, unde! Beatae iste iusto
                    magnam repellat repudiandae sequi, ullam? Alias amet animi aperiam blanditiis consectetur
                    consequuntur cupiditate debitis ea eaque earum esse et eveniet exercitationem expedita itaque, iure
                    magnam nihil numquam obcaecati pariatur perferendis possimus, praesentium provident quasi quia
                    quibusdam quidem quisquam quo ratione reiciendis reprehenderit tempora tempore vel voluptas
                    voluptates voluptatibus voluptatum! Aliquid at facere impedit ipsam ipsum, odit quisquam sit? Amet,
                    animi aspernatur aut autem beatae consectetur deserunt est et ipsam ipsum perspiciatis quasi
                    quibusdam recusandae suscipit, tempore tenetur unde veniam. Aperiam corporis deleniti enim facilis
                    molestiae, molestias nihil perferendis provident similique sit ullam voluptatum. Atque consequatur
                    cum ea et eum, facere ipsa magni nemo nisi nulla numquam, placeat quas quod sapiente similique sint
                    sit veniam, voluptas. Aliquid consectetur ex fugiat magnam quas quasi tenetur unde voluptatum.
                    Consequuntur doloribus ducimus facere illo, laboriosam laborum molestias mollitia nisi odio
                    possimus, quae repudiandae sit sunt ullam velit veritatis voluptates. Ab ad at commodi esse, et
                    magnam modi nulla quidem sequi sint sunt ut voluptate! Accusantium animi consequatur dignissimos,
                    dolores esse est inventore laborum magni maxime minus natus nisi quo recusandae reiciendis rem saepe
                    sunt vitae. A eveniet maiores recusandae sequi similique. A adipisci aliquam commodi consequuntur
                    eaque earum eius error eveniet illo mollitia nam nobis quam quidem ratione saepe tempora, ullam
                    veniam vitae voluptatibus voluptatum. Accusamus aliquid aut, commodi delectus deserunt dignissimos
                    excepturi facilis nisi non praesentium sint ullam. A aliquam architecto, asperiores doloremque ea
                    eos harum in iusto labore minima molestias omnis tempore tenetur ullam veniam. Aliquam consectetur
                    cum, deserunt dolor, ducimus enim esse harum magnam minima nesciunt non numquam pariatur praesentium
                    quia quis quisquam repudiandae. Aliquid atque deleniti distinctio ea est eveniet illo ipsum iste
                    iusto, magni molestiae mollitia nam necessitatibus odio optio provident qui, quo ratione rerum vero?
                    Blanditiis excepturi libero minus necessitatibus nostrum provident quae quia similique temporibus
                    voluptatem. Aliquam, architecto asperiores consequuntur cumque delectus deleniti distinctio
                    doloribus ducimus ea eos esse hic id laborum maiores minus modi molestiae molestias necessitatibus
                    nisi officia pariatur, quam qui, quis quo sunt suscipit unde? Accusamus amet consectetur cupiditate
                    deleniti dolore ea eligendi enim expedita fugiat fugit harum impedit incidunt libero minima minus
                    non odio odit quod recusandae saepe, suscipit unde vel? Accusamus, commodi consectetur debitis
                    dolorum excepturi fuga illum labore nostrum nulla omnis sequi soluta voluptatibus? Aliquam
                    consectetur, exercitationem in magni nam nemo temporibus totam? Alias esse exercitationem hic,
                    itaque iure magnam minus molestias nihil obcaecati quia quod totam ullam, voluptas. Ad adipisci
                    aliquid amet aspernatur at culpa cupiditate deleniti, deserunt, dolor dolores doloribus dolorum
                    eaque excepturi facere facilis harum ipsam itaque iure minus mollitia necessitatibus, neque nihil
                    nostrum obcaecati praesentium recusandae reiciendis repellat repudiandae rerum suscipit temporibus
                    ullam vel voluptatem! Iste modi, ut. Architecto at aut consequuntur delectus distinctio dolor
                    explicabo fuga magni modi nisi non, nostrum numquam odit omnis quis sapiente sunt totam unde vero
                    voluptas voluptate, voluptatem voluptatibus? Adipisci aperiam architecto asperiores blanditiis
                    debitis doloremque doloribus exercitationem explicabo facilis, fugit inventore laborum minus nemo
                    odit omnis provident qui quo recusandae similique sint sit tempora vero voluptatem? Autem
                    consectetur, delectus dicta laborum nesciunt non nulla quam quibusdam. Ab at autem culpa debitis
                    dicta distinctio est facilis fuga in ipsa mollitia quas rerum, temporibus tenetur, totam velit
                    voluptatum. Adipisci architecto at aut consequuntur culpa deserunt ducimus et eum, fugit
                    necessitatibus optio pariatur perspiciatis qui, quibusdam quidem, tempora veniam. A ab consectetur
                    cupiditate eveniet excepturi fuga fugit ipsa magnam, non nostrum quae repellat, temporibus vero
                    voluptatum?</p>
            </main>
        </div>
    )
}
export default Layout;