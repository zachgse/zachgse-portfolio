import Link from "next/link";
import Button from "@/components/reusable/Button";
import { formatDate } from "@/utils/helper";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { cachedFetch } from "@/supabase/custom";
import type { CertificationType } from "@/utils/types";

const Certificate = async() => {
    const certificates = await cachedFetch("certifications?limit=4")

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Award size={20}/>
                <p className="font-bold text-2xl">Certifications</p>
            </div>
            <div className="flex flex-col gap-4">
                {certificates.map((certificate:CertificationType) => (
                <div key={certificate.id} className="w-full flex gap-4"> 
                    <div className="flex flex-1 gap-4">
                        <img src={certificate.icon} alt={`${certificate.issuer} icon`} className="w-16 h-16"/>
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">{certificate.title}</p>
                            <p className="text-xs font-semibold">{certificate.issuer}</p>
                            <p className="text-gray-400 dark:text-white text-xs flex items-center gap-1">
                                <Calendar size={12}/>
                                {formatDate(certificate.achieved_at)}
                            </p>
                        </div>
                    </div>
                    <a href={certificate.url} className="ml-auto">
                        <Button type="secondary">
                            <ExternalLink size={12}/>
                            Show Credentials
                        </Button>
                    </a>
                </div>
                ))}

                <Link href="/achievement" className="text-center text-info cursor-pointer text-sm hover:underline flex items-center justify-center gap-1">
                    <ExternalLink size={16}/>
                    Show all licenses and certifications
                </Link>
            </div>
        </div>
    )
}

export default Certificate;