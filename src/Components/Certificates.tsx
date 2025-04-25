import { CertificatesInfo } from "../User"
import CertificateCard from "./CertificateCard"

const Certificates = () => {
    return(
        <div className="px-16 mx-20 my-10 font-mono" id="Certificates">
            <h1 className="text-4xl text-center mb-5 font-bold text-white"><span className="text-primaryColor">04.&nbsp;</span>Sertifikalar</h1>
            <div className="flex flex-wrap justify-between gap-4">
                {
                    CertificatesInfo.map((certificate:any,index:number) =><CertificateCard key={index} title={certificate.title} company={certificate.company} image={certificate.image} />)
                }
            </div>
        </div>
    )
}

export default Certificates