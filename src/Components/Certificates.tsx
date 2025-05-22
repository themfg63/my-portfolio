import { CertificatesInfo } from "../User"
import CertificateCard from "./CertificateCard"

const Certificates = () => {
    return(
        <div className="px-16 my-10 font-mono md-mx:px-6" id="Sertifikalar">
            <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center mb-10 font-bold text-white">
                <span className="text-primaryColor">04.&nbsp;</span>Sertifikalar
            </h1>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
                {
                    CertificatesInfo.map((certificate:any,index:number) =><CertificateCard key={index} title={certificate.title} company={certificate.company} image={certificate.image} />)
                }
            </div>
        </div>
    )
}

export default Certificates