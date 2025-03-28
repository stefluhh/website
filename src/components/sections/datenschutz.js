import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledDatenschutzSection = styled.section`
  max-width: 1200px;

`;
const StyledText = styled.div`
`;

const StyledDatenschutz = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledDatenschutzSection id="Datenschutz" ref={revealContainer}>
      <StyledText>
        <div>
          <h1>Datenschutzerklärung</h1>
          <p>Wir freuen uns sehr, dass Sie Interesse an unserem Unternehmen gezeigt haben. Der Schutz personenbezogener Daten hat für den
            Betreiber dieser Website einen besonders hohen Stellenwert. Die Nutzung der Internetseiten des Betreibers ist grundsätzlich ohne
            jede Angabe personenbezogener Daten möglich; jedoch kann die Verarbeitung personenbezogener Daten erforderlich werden, wenn eine
            betroffene Person besondere Dienstleistungen unseres Unternehmens über unsere Website in Anspruch nehmen möchte. Ist die
            Verarbeitung personenbezogener Daten erforderlich und besteht keine gesetzliche Grundlage für eine solche Verarbeitung, holen
            wir grundsätzlich die Einwilligung der betroffenen Person ein.</p>
          <p>Die Verarbeitung personenbezogener Daten, wie z.B. Name, Adresse, E-Mail-Adresse oder Telefonnummer einer betroffenen Person,
            erfolgt stets im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und unter Beachtung der landesspezifischen
            Datenschutzbestimmungen, die für den Betreiber der Website gelten. Mit dieser Datenschutzerklärung möchte unser Unternehmen die
            Öffentlichkeit über Art, Umfang und Zweck der personenbezogenen Daten, die wir erheben, verwenden und verarbeiten, informieren.
            Außerdem werden betroffene Personen durch diese Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.</p>
          <p>Als für die Verarbeitung Verantwortlicher haben wir zahlreiche technische und organisatorische Maßnahmen umgesetzt, um den
            bestmöglichen Schutz der über diese Website verarbeiteten personenbezogenen Daten sicherzustellen. Internetbasierte
            Datenübertragungen können jedoch grundsätzlich Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht gewährleistet
            werden kann. Aus diesem Grund steht es jeder betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, etwa
            telefonisch, an uns zu übermitteln.</p>
          <h4>1. Begriffsbestimmungen</h4>
          <p>Die Datenschutzerklärung des Betreibers dieser Website basiert auf den Begriffen, die der Europäische Gesetzgeber bei der
            Verabschiedung der Datenschutz-Grundverordnung (DSGVO) verwendet hat. Unsere Datenschutzerklärung soll sowohl für die breite
            Öffentlichkeit als auch für unsere Kunden und Geschäftspartner leicht verständlich und lesbar sein. Um dies zu gewährleisten,
            möchten wir zu Beginn die verwendeten Begriffe erläutern.</p>
          <p>In dieser Datenschutzerklärung verwenden wir unter anderem die folgenden Begriffe:</p>
          <ul className="list-none">
            <li><h4>a) Personenbezogene Daten</h4>
              <p>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person
                („Betroffene“) beziehen. Eine identifizierbare natürliche Person ist eine Person, die direkt oder indirekt, insbesondere
                durch Zuordnung zu einer Kennung wie einem Namen, einer Identifikationsnummer, Standortdaten, einer Online-Kennung oder
                einem oder mehreren spezifischen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, mentalen,
                wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.</p>
            </li>
            <li><h4>b) Betroffene Person</h4>
              <p>Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten durch den
                Verantwortlichen verarbeitet werden.</p>
            </li>
            <li><h4>c) Verarbeitung</h4>
              <p>Verarbeitung ist jeder Vorgang oder jede Reihe von Vorgängen, die mit personenbezogenen Daten oder mit Datensätzen
                personenbezogener Daten durchgeführt werden, unabhängig davon, ob dies mit automatisierten Mitteln erfolgt, wie z.B.
                Erhebung, Aufzeichnung, Organisation, Strukturierung, Speicherung, Anpassung oder Veränderung, Abruf, Abfrage, Verwendung,
                Offenlegung durch Übermittlung, Verbreitung oder auf andere Weise Bereitstellung, Abgleich oder Kombination, Einschränkung,
                Löschung oder Vernichtung.</p>
            </li>
            <li><h4>d) Einschränkung der Verarbeitung</h4>
              <p>Einschränkung der Verarbeitung ist die Kennzeichnung gespeicherter personenbezogener Daten mit dem Ziel, deren Verarbeitung
                in Zukunft einzuschränken.</p>
            </li>
            <li><h4>e) Profiling</h4>
              <p>Profiling bezeichnet jede Form der automatisierten Verarbeitung personenbezogener Daten, die darin besteht,
                personenbezogene Daten zu verwenden, um bestimmte persönliche Aspekte, die eine natürliche Person betreffen, zu bewerten,
                insbesondere um Aspekte in Bezug auf die Arbeitsleistung, die wirtschaftliche Situation, die Gesundheit, persönliche
                Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Standort oder Bewegungen der betroffenen Person zu analysieren oder
                vorherzusagen.</p>
            </li>
            <li><h4>f) Pseudonymisierung</h4>
              <p>Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne
                Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, wobei
                diese zusätzlichen Informationen getrennt aufbewahrt und durch technische und organisatorische Maßnahmen geschützt werden,
                um zu gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person
                zugeordnet werden können.</p>
            </li>
            <li><h4>g) Verantwortlicher oder für die Verarbeitung Verantwortlicher</h4>
              <p>Der Verantwortliche oder für die Verarbeitung Verantwortliche ist die natürliche oder juristische Person, die öffentliche
                Behörde, Agentur oder andere Stelle, die allein oder gemeinsam mit anderen die Zwecke und Mittel der Verarbeitung
                personenbezogener Daten bestimmt; werden die Zwecke und Mittel der Verarbeitung durch das Unionsrecht oder das Recht der
                Mitgliedstaaten festgelegt, so kann der Verantwortliche oder die spezifischen Kriterien für seine Benennung durch das
                Unionsrecht oder das Recht der Mitgliedstaaten festgelegt werden.</p>
            </li>
            <li><h4>h) Auftragsverarbeiter</h4>
              <p>Auftragsverarbeiter ist eine natürliche oder juristische Person, die personenbezogene Daten im Auftrag des Verantwortlichen
                verarbeitet.</p>
            </li>
            <li><h4>i) Empfänger</h4>
              <p>Empfänger ist eine natürliche oder juristische Person, eine öffentliche Behörde, eine Agentur oder eine andere Stelle, an
                die personenbezogene Daten übermittelt werden, ob es sich um einen Dritten handelt oder nicht.</p>
            </li>
            <li><h4>j) Dritter</h4>
              <p>Dritter ist eine natürliche oder juristische Person, eine öffentliche Behörde, eine Agentur oder eine andere Stelle, die
                nicht die betroffene Person, der Verantwortliche oder der Auftragsverarbeiter ist, sowie Personen, die unter der
                unmittelbaren Autorität des Verantwortlichen oder des Auftragsverarbeiters befugt sind, personenbezogene Daten zu
                verarbeiten.</p>
            </li>
            <li><h4>k) Einwilligung</h4>
              <p>Einwilligung der betroffenen Person ist jede freiwillig abgegebene, spezifische, informierte und unmissverständliche
                Willensbekundung der betroffenen Person, durch die sie durch eine Erklärung oder eine eindeutige bestätigende Handlung ihre
                Zustimmung zur Verarbeitung der sie betreffenden personenbezogenen Daten gibt.</p>
            </li>
          </ul>
          <h4 data-v-9f15af52="">2. Name and Address of the controller</h4>
          <p data-v-9f15af52=""> Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws
            applicable in Member states of the European Union and other provisions related to data protection is: </p>
          <p>
            Stefano Lucka<br/>
            Uckermarkweg 1️⃣2️⃣d<br/>
            2️⃣2️⃣4️⃣1️⃣5️⃣ Hamburg
          </p>
          <p>
            <strong>Contact Information</strong><br/>
            Telephone: +4️⃣9️⃣ 1️⃣5️⃣️7️⃣️ 5️⃣️7️⃣️1️⃣6️⃣️7️⃣️9️⃣️7️⃣️8️⃣️<br/>
            E-Mail: freelance@stefano-lucka.dev<br/><br/>
            Internet address: https://stefano-lucka.dev
          </p>
          <h4>3. Cookies</h4>
          <p>Die Internetseiten des Betreibers verwenden Cookies. Cookies sind Textdateien, die über einen Internetbrowser in einem
            Computersystem gespeichert werden.</p>
          <p>Viele Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist ein
            eindeutiger Identifier des Cookies. Sie besteht aus einer Zeichenkette, durch die Internetseiten und Server dem spezifischen
            Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es besuchten Internetseiten und
            Servern, den einzelnen Browser der betroffenen Person von anderen Internetbrowsern zu unterscheiden, die andere Cookies
            enthalten. Ein spezifischer Internetbrowser kann durch die eindeutige Cookie-ID erkannt und identifiziert werden.</p>
          <p>Durch die Verwendung von Cookies kann der Betreiber der Website den Nutzern dieser Website benutzerfreundlichere
            Dienstleistungen bieten, die ohne das Setzen von Cookies nicht möglich wären.</p>
          <p>Durch ein Cookie können die Informationen und Angebote auf unserer Website mit dem Benutzer im Blick optimiert werden. Cookies
            ermöglichen es uns, wie bereits erwähnt, unsere Website-Nutzer zu erkennen. Ziel dieser Erkennung ist es, den Nutzern die
            Nutzung unserer Website zu erleichtern. Der Website-Nutzer, der Cookies verwendet, muss z.B. seine Zugangsdaten nicht jedes Mal
            eingeben, wenn er die Website aufruft, weil dies von der Website übernommen wird und das Cookie somit im Computersystem des
            Nutzers gespeichert wird. Ein weiteres Beispiel ist das Cookie eines Warenkorbs in einem Online-Shop. Der Online-Shop merkt sich
            die Artikel, die ein Kunde über ein Cookie in den virtuellen Warenkorb gelegt hat.</p>
          <p>Die betroffene Person kann jederzeit das Setzen von Cookies durch unsere Website mittels einer entsprechenden Einstellung des
            verwendeten Internetbrowsers verhindern und somit das Setzen von Cookies dauerhaft ablehnen. Darüber hinaus können bereits
            gesetzte Cookies jederzeit über einen Internetbrowser oder andere Softwareprogramme gelöscht werden. Dies ist in allen gängigen
            Internetbrowsern möglich. Wenn die betroffene Person das Setzen von Cookies im verwendeten Internetbrowser deaktiviert, sind
            möglicherweise nicht alle Funktionen unserer Website vollständig nutzbar.</p>

          <h4>4. Erhebung allgemeiner Daten und Informationen</h4>
          <p>Die Website des Betreibers erfasst eine Reihe allgemeiner Daten und Informationen, wenn eine betroffene Person oder ein
            automatisiertes System die Website aufruft. Diese allgemeinen Daten und Informationen werden in den Server-Logfiles gespeichert.
            Erfasst werden können (1) die verwendeten Browsertypen und -versionen, (2) das vom zugreifenden System verwendete
            Betriebssystem, (3) die Website, von der ein zugreifendes System unsere Website erreicht (sogenannte Referrer), (4) die
            Unterwebseiten, (5) das Datum und die Uhrzeit des Zugriffs auf die Internetseite, (6) eine Internetprotokolladresse
            (IP-Adresse), (7) der Internetdienstanbieter des zugreifenden Systems und (8) alle anderen ähnlichen Daten und Informationen,
            die im Falle von Angriffen auf unsere Informationstechnologiesysteme verwendet werden könnten.</p>
          <p>Bei der Nutzung dieser allgemeinen Daten und Informationen zieht der Betreiber der Website keine Rückschlüsse auf die
            betroffene Person. Vielmehr werden diese Informationen benötigt, um (1) den Inhalt unserer Website korrekt auszuliefern, (2) den
            Inhalt unserer Website sowie deren Werbung zu optimieren, (3) die langfristige Funktionsfähigkeit unserer
            Informationstechnologiesysteme und der Webtechnologie zu gewährleisten und (4) den Strafverfolgungsbehörden die notwendigen
            Informationen für die Strafverfolgung im Falle eines Cyberangriffs zur Verfügung zu stellen. Aus diesem Grund analysiert der
            Betreiber der Website anonym erhobene Daten und Informationen statistisch, mit dem Ziel, den Datenschutz und die Datensicherheit
            in unserem Unternehmen zu erhöhen und ein optimales Schutzniveau für die personenbezogenen Daten, die wir verarbeiten,
            sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt von allen personenbezogenen Daten gespeichert, die eine
            betroffene Person bereitstellt.</p>

          <h4>5. Routinemäßige Löschung und Sperrung personenbezogener Daten</h4>
          <p>Der für die Verarbeitung Verantwortliche verarbeitet und speichert die personenbezogenen Daten der betroffenen Person nur für
            den Zeitraum, der zur Erreichung des Speicherzwecks erforderlich ist, oder soweit dies durch den Europäischen Gesetzgeber oder
            andere gesetzliche Vorschriften, denen der Verantwortliche unterliegt, vorgesehen ist.</p>
          <p>Wenn der Speicherzweck entfällt oder eine vom Europäischen Gesetzgeber oder einem anderen zuständigen Gesetzgeber festgelegte
            Speicherfrist abläuft, werden die personenbezogenen Daten routinemäßig gesperrt oder gelöscht, soweit keine gesetzlichen
            Aufbewahrungspflichten bestehen.</p>

          <h4>6. Rechte der betroffenen Person</h4>
          <ul className="list-none">
            <li>
              <h4>a) Recht auf Bestätigung</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, vom Verantwortlichen die Bestätigung zu
                erhalten, ob personenbezogene Daten, die sie betreffen, verarbeitet werden. Möchte eine betroffene Person von diesem Recht
                Gebrauch machen, kann sie sich jederzeit an einen Mitarbeiter des Verantwortlichen wenden.</p>
            </li>
            <li><h4>b) Recht auf Auskunft</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, jederzeit unentgeltlich Auskunft über ihre
                bei dem Verantwortlichen gespeicherten personenbezogenen Daten zu erhalten und eine Kopie dieser Informationen zu erhalten.
                Darüber hinaus gewähren die europäischen Richtlinien und Verordnungen der betroffenen Person Zugang zu den folgenden
                Informationen:</p>
              <ul className="list-none">
                <li>die Zwecke der Verarbeitung;</li>
                <li>die Kategorien der verarbeiteten personenbezogenen Daten;</li>
                <li>die Empfänger oder Kategorien von Empfängern, denen die personenbezogenen Daten offengelegt wurden oder werden,
                  insbesondere Empfänger in Drittländern oder internationalen Organisationen;
                </li>
                <li>soweit möglich, der vorgesehene Zeitraum, für den die personenbezogenen Daten gespeichert werden, oder, wenn dies nicht
                  möglich ist, die Kriterien für die Festlegung dieses Zeitraums;
                </li>
                <li>die Existenz des Rechts, vom Verantwortlichen die Berichtigung oder Löschung personenbezogener Daten oder die
                  Einschränkung der Verarbeitung personenbezogener Daten zu verlangen oder der Verarbeitung zu widersprechen;
                </li>
                <li>die Existenz des Rechts, bei einer Aufsichtsbehörde eine Beschwerde einzureichen;</li>
                <li>soweit die personenbezogenen Daten nicht bei der betroffenen Person erhoben wurden, alle verfügbaren Informationen über
                  ihre Quelle;
                </li>
                <li>die Existenz einer automatisierten Entscheidungsfindung, einschließlich Profiling, gemäß Artikel 22 Abs. 1 und 4 der
                  DSGVO und, zumindest in diesen Fällen, die wesentlichen Informationen über die zugrunde liegende Logik sowie die Bedeutung
                  und die vorgesehenen Folgen einer solchen Verarbeitung für die betroffene Person.
                </li>
              </ul>
              <p>Darüber hinaus hat die betroffene Person das Recht, Informationen darüber zu erhalten, ob personenbezogene Daten in ein
                Drittland oder an eine internationale Organisation übermittelt werden. Ist dies der Fall, hat die betroffene Person das
                Recht, über die geeigneten Garantien im Zusammenhang mit der Übermittlung informiert zu werden.</p>
              <p>Möchte eine betroffene Person von diesem Auskunftsrecht Gebrauch machen, kann sie sich jederzeit an einen Mitarbeiter des
                Verantwortlichen wenden.</p>
            </li>
            <li>
              <h4>c) Recht auf Berichtigung</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, vom Verantwortlichen ohne unangemessene
                Verzögerung die Berichtigung unrichtiger personenbezogener Daten, die sie betreffen, zu verlangen. Unter Berücksichtigung
                der Zwecke der Verarbeitung hat die betroffene Person das Recht, unvollständige personenbezogene Daten zu vervollständigen,
                auch durch eine ergänzende Erklärung.</p>
              <p>Wenn eine betroffene Person von diesem Recht auf Berichtigung Gebrauch machen möchte, kann sie sich jederzeit an einen
                Mitarbeiter des Verantwortlichen wenden.</p>
            </li>
            <li>
              <h4>d) Recht auf Löschung (Recht auf Vergessenwerden)</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, vom Verantwortlichen die Löschung
                personenbezogener Daten, die sie betreffen, ohne unangemessene Verzögerung zu verlangen, und der Verantwortliche ist
                verpflichtet, personenbezogene Daten ohne unangemessene Verzögerung zu löschen, wenn einer der folgenden Gründe zutrifft, es
                sei denn, die Verarbeitung ist erforderlich:</p>
              <ul className="list-none">
                <li>Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf andere Weise verarbeitet wurden, nicht
                  mehr erforderlich.
                </li>
                <li>Die betroffene Person zieht die Einwilligung zurück, auf deren Grundlage die Verarbeitung gemäß Artikel 6 Abs. 1 lit. a
                  DSGVO oder Artikel 9 Abs. 2 lit. a DSGVO beruht, und es gibt keine andere rechtliche Grundlage für die Verarbeitung.
                </li>
                <li>Die betroffene Person legt gemäß Artikel 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine
                  überwiegenden, berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Artikel 21 Abs. 2 DSGVO
                  Widerspruch gegen die Verarbeitung ein.
                </li>
                <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                <li>Die personenbezogenen Daten müssen zur Erfüllung einer rechtlichen Verpflichtung gemäß dem Unionsrecht oder dem Recht
                  der Mitgliedstaaten, dem der Verantwortliche unterliegt, gelöscht werden.
                </li>
                <li>Die personenbezogenen Daten wurden im Zusammenhang mit der Bereitstellung von Diensten der Informationsgesellschaft
                  gemäß Artikel 8 Abs. 1 DSGVO erhoben.
                </li>
              </ul>
              <p>Wenn einer der oben genannten Gründe zutrifft und eine betroffene Person die Löschung personenbezogener Daten verlangt, die
                auf dieser Website oder in den von dieser Website genutzten Diensten gespeichert sind, kann sie sich jederzeit an den
                Verantwortlichen wenden. Der Betreiber der Website wird unverzüglich sicherstellen, dass der Löschantrag sofort umgesetzt
                wird.</p>
              <p>Wenn der Verantwortliche personenbezogene Daten veröffentlicht hat und gemäß Artikel 17 Abs. 1 DSGVO zur Löschung der
                personenbezogenen Daten verpflichtet ist, wird der Verantwortliche, unter Berücksichtigung der verfügbaren Technologie und
                der Implementierungskosten, angemessene Schritte unternehmen, einschließlich technischer Maßnahmen, um andere
                Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass die betroffene Person die
                Löschung von Links zu oder Kopien oder Replikationen dieser personenbezogenen Daten durch diese Verantwortlichen verlangt
                hat, soweit die Verarbeitung nicht erforderlich ist. Der Betreiber der Website wird in Einzelfällen die notwendigen
                Maßnahmen ergreifen.</p>
            </li>
            <li>
              <h4>e) Recht auf Einschränkung der Verarbeitung</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, vom Verantwortlichen die Einschränkung der
                Verarbeitung zu verlangen, wenn einer der folgenden Fälle zutrifft:</p>
              <ul className="list-none">
                <li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person für einen Zeitraum bestritten, der es dem
                  Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen.
                </li>
                <li>Die Verarbeitung ist unrechtmäßig und die betroffene Person widerspricht der Löschung der personenbezogenen Daten und
                  verlangt stattdessen die Einschränkung ihrer Nutzung.
                </li>
                <li>Der Verantwortliche benötigt die personenbezogenen Daten für die Zwecke der Verarbeitung nicht mehr, jedoch sind sie von
                  der betroffenen Person zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich.
                </li>
                <li>Die betroffene Person hat der Verarbeitung gemäß Artikel 21 Abs. 1 DSGVO widersprochen, während überprüft wird, ob die
                  berechtigten Gründe des Verantwortlichen die der betroffenen Person überwiegen.
                </li>
              </ul>
              <p>Wenn einer der oben genannten Fälle zutrifft und eine betroffene Person die Einschränkung der Verarbeitung
                personenbezogener Daten verlangt, die auf dieser Website oder in den von dieser Website genutzten Diensten gespeichert sind,
                kann sie sich jederzeit an den Verantwortlichen wenden. Der Betreiber der Website wird die Einschränkung der Verarbeitung
                veranlassen.</p>
            </li>
            <li>
              <h4>f) Recht auf Datenübertragbarkeit</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, die personenbezogenen Daten, die sie
                betreffen und die sie einem Verantwortlichen bereitgestellt hat, in einem strukturierten, gängigen und maschinenlesbaren
                Format zu erhalten. Sie hat das Recht, diese Daten ohne Behinderung durch den Verantwortlichen an einen anderen
                Verantwortlichen zu übermitteln, sofern die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Abs. 1 lit. a DSGVO oder
                Artikel 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gemäß Artikel 6 Abs. 1 lit. b DSGVO beruht und die Verarbeitung durch
                automatisierte Mittel erfolgt, es sei denn, die Verarbeitung ist für die Erfüllung einer Aufgabe erforderlich, die im
                öffentlichen Interesse oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.</p>
              <p>Darüber hinaus hat die betroffene Person im Rahmen der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Artikel 20 Abs.
                1 DSGVO das Recht, personenbezogene Daten direkt von einem Verantwortlichen an einen anderen zu übermitteln, soweit dies
                technisch möglich ist und dabei keine negativen Auswirkungen auf die Rechte und Freiheiten anderer haben.</p>
              <p>Um das Recht auf Datenübertragbarkeit auszuüben, kann die betroffene Person jederzeit den Betreiber der Website
                kontaktieren.</p>
            </li>
            <li>
              <h4>g) Recht auf Widerspruch</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, aus Gründen, die sich aus ihrer besonderen
                Situation ergeben, jederzeit der Verarbeitung personenbezogener Daten, die sie betreffen, zu widersprechen, wenn diese auf
                Artikel 6 Abs. 1 lit. e oder f DSGVO basiert. Dies gilt auch für Profiling, das auf diesen Bestimmungen basiert.</p>
              <p>Der Betreiber der Website wird die personenbezogenen Daten nicht mehr verarbeiten, es sei denn, er kann zwingende,
                berechtigte Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person
                überwiegen, oder für die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
              <p>Wenn der Betreiber der Website personenbezogene Daten für Direktmarketingzwecke verarbeitet, hat die betroffene Person
                jederzeit das Recht, der Verarbeitung ihrer personenbezogenen Daten für diese Zwecke zu widersprechen. Dies gilt auch für
                Profiling, soweit es sich auf dieses Direktmarketing bezieht. Wenn die betroffene Person dem Betreiber der Website
                widerspricht, ihre personenbezogenen Daten für Direktmarketingzwecke zu verarbeiten, wird der Betreiber der Website diese
                Daten nicht mehr für diese Zwecke verarbeiten.</p>
              <p>Darüber hinaus hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, der
                Verarbeitung personenbezogener Daten zu widersprechen, die sie betreffen, wenn diese durch den Betreiber der Website für
                wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Artikel 89 Abs. 1 DSGVO erfolgt, es
                sei denn, die Verarbeitung ist zur Erfüllung einer Aufgabe erforderlich, die im öffentlichen Interesse durchgeführt
                wird.</p>
              <p>Um das Widerspruchsrecht auszuüben, kann die betroffene Person jederzeit einen Mitarbeiter des Betreibers der Website
                kontaktieren. Darüber hinaus ist die betroffene Person im Rahmen der Nutzung von Diensten der Informationsgesellschaft, und
                unbeschadet der Richtlinie 2002/58/EG, berechtigt, ihr Widerspruchsrecht durch automatisierte Mittel mit technischen
                Spezifikationen auszuüben.</p>
            </li>
            <li>
              <h4>h) Automatisierte Einzelentscheidungen, einschließlich Profiling</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, nicht einer Entscheidung unterworfen zu
                werden, die ausschließlich auf einer automatisierten Verarbeitung, einschließlich Profiling, beruht, die rechtliche
                Auswirkungen auf sie hat oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung (1) für den Abschluss
                oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, oder (2) nicht
                durch das Unions- oder Mitgliedstaatenrecht, dem der Verantwortliche unterliegt, autorisiert ist und auch geeignete
                Maßnahmen zum Schutz der Rechte und Freiheiten der betroffenen Person sowie ihrer legitimen Interessen festgelegt sind, oder
                (3) nicht auf der ausdrücklichen Einwilligung der betroffenen Person beruht.</p>
              <p>Wenn die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und einem
                Verantwortlichen erforderlich ist, oder (2) auf der ausdrücklichen Einwilligung der betroffenen Person basiert, wird der
                Betreiber der Website geeignete Maßnahmen zum Schutz der Rechte und Freiheiten der betroffenen Person sowie ihrer legitimen
                Interessen ergreifen, mindestens das Recht auf menschliche Intervention durch den Verantwortlichen, um ihre Sichtweise zu
                äußern und die Entscheidung anzufechten.</p>
              <p>Wenn die betroffene Person das Recht auf automatisierte Einzelentscheidungen ausüben möchte, kann sie sich jederzeit an den
                Betreiber der Website wenden.</p>
            </li>
            <li>
              <h4>i) Recht auf Widerruf der datenschutzrechtlichen Einwilligung</h4>
              <p>Jede betroffene Person hat das von der Europäischen Gesetzgebung gewährte Recht, ihre Einwilligung zur Verarbeitung ihrer
                personenbezogenen Daten jederzeit zu widerrufen.</p>
              <p>Wenn die betroffene Person das Recht auf Widerruf der Einwilligung ausüben möchte, kann sie sich jederzeit an den Betreiber
                der Website wenden.</p>
            </li>
          </ul>
          <h4>7. Rechtsgrundlage für die Verarbeitung</h4>
          <p>Art. 6 Abs. 1 lit. a DSGVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, für die wir die Einwilligung zu einem
            bestimmten Verarbeitungszweck einholen. Wenn die Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrags erforderlich
            ist, an dem die betroffene Person beteiligt ist, wie es zum Beispiel der Fall ist, wenn Verarbeitungsvorgänge zur Lieferung von
            Waren oder zur Erbringung anderer Dienstleistungen notwendig sind, basiert die Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO.
            Dasselbe gilt für solche Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind,
            beispielsweise im Falle von Anfragen zu unseren Produkten oder Dienstleistungen. Ist unser Unternehmen einer rechtlichen
            Verpflichtung unterworfen, aufgrund derer die Verarbeitung personenbezogener Daten erforderlich ist, wie beispielsweise zur
            Erfüllung steuerlicher Verpflichtungen, basiert die Verarbeitung auf Art. 6 Abs. 1 lit. c DSGVO. In seltenen Fällen kann die
            Verarbeitung personenbezogener Daten notwendig sein, um lebenswichtige Interessen der betroffenen Person oder einer anderen
            natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem Unternehmen verletzt wird und
            sein Name, Alter, Krankenversicherungsdaten oder andere lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder einen
            anderen Dritten weitergegeben werden müssten. Dann basiert die Verarbeitung auf Art. 6 Abs. 1 lit. d DSGVO. Schließlich können
            Verarbeitungsvorgänge auch auf Artikel 6 Abs. 1 lit. f DSGVO gestützt werden. Diese Rechtsgrundlage wird für
            Verarbeitungsvorgänge verwendet, die nicht durch eine der oben genannten Rechtsgrundlagen abgedeckt sind, wenn die Verarbeitung
            für die Zwecke der berechtigten Interessen erforderlich ist, die unser Unternehmen oder ein Dritter verfolgt, es sei denn, diese
            Interessen werden durch die Interessen oder Grundrechte und -freiheiten der betroffenen Person, die den Schutz personenbezogener
            Daten erfordern, überlagert. Solche Verarbeitungsvorgänge sind besonders zulässig, da sie vom Europäischen Gesetzgeber
            ausdrücklich genannt wurden. Es wurde davon ausgegangen, dass ein berechtigtes Interesse angenommen werden kann, wenn die
            betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DSGVO).</p>

          <h4>8. Die berechtigten Interessen, die der Verantwortliche oder ein Dritter verfolgt</h4>
          <p>Wenn die Verarbeitung personenbezogener Daten auf Artikel 6 Abs. 1 lit. f DSGVO basiert, besteht unser berechtigtes Interesse
            darin, unser Geschäft zugunsten des Wohlergehens aller unserer Mitarbeiter und Aktionäre durchzuführen.</p>

          <h4>9. Zeitraum, für den die personenbezogenen Daten gespeichert werden</h4>
          <p>Die Kriterien, die zur Bestimmung des Zeitraums der Speicherung personenbezogener Daten verwendet werden, sind der jeweilige
            gesetzliche Aufbewahrungszeitraum. Nach Ablauf dieses Zeitraums werden die entsprechenden Daten routinemäßig gelöscht, solange
            sie nicht mehr für die Erfüllung des Vertrags oder die Durchführung eines Vertrags erforderlich sind.</p>

          <h4>10. Bereitstellung personenbezogener Daten als gesetzliche oder vertragliche Anforderung; Notwendigkeit für den Abschluss
            eines Vertrags; Verpflichtung der betroffenen Person zur Bereitstellung der personenbezogenen Daten; mögliche Folgen der
            Nichtbereitstellung solcher Daten</h4>
          <p>Wir weisen darauf hin, dass die Bereitstellung personenbezogener Daten teilweise gesetzlich vorgeschrieben ist (z. B.
            steuerliche Vorschriften) oder auch aus vertraglichen Bestimmungen resultieren kann (z. B. Informationen zum Vertragspartner).
            Manchmal kann es notwendig sein, einen Vertrag abzuschließen, dass die betroffene Person uns personenbezogene Daten zur
            Verfügung stellt, die anschließend von uns verarbeitet werden müssen. Die betroffene Person ist beispielsweise verpflichtet, uns
            personenbezogene Daten bereitzustellen, wenn unser Unternehmen einen Vertrag mit ihr abschließt. Die Nichtbereitstellung der
            personenbezogenen Daten hätte zur Folge, dass der Vertrag mit der betroffenen Person nicht abgeschlossen werden könnte. Bevor
            die betroffene Person uns personenbezogene Daten bereitstellt, muss sie sich an einen Mitarbeiter wenden. Der Mitarbeiter klärt
            die betroffene Person darüber auf, ob die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich erforderlich
            oder für den Abschluss des Vertrages notwendig ist, ob eine Verpflichtung zur Bereitstellung der personenbezogenen Daten besteht
            und welche Folgen die Nichtbereitstellung der personenbezogenen Daten hat.</p>

          <h4>11. Vorliegen automatisierter Entscheidungsfindung</h4>
          <p>Als verantwortungsbewusstes Unternehmen verwenden wir keine automatisierte Entscheidungsfindung oder Profiling.</p>

          <p>Diese Datenschutzerklärung wurde mit dem Datenschutz-Generator der <a
            href="https://dg-datenschutz.de/services/external-data-protection-officer/?lang=en"> DGD - Your External DPO </a> erstellt, der
            in Zusammenarbeit mit <a href="https://www.wbs-law.de/eng/">deutschen Anwälten</a> von WILDE BEUGER SOLMECKE, Köln, entwickelt
            wurde.</p>

        </div>
      </StyledText>
    </StyledDatenschutzSection>
  );
};

export default StyledDatenschutz;
