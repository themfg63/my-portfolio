import { Badge, Card, Group, Image, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks"
import FullCertificateModal from "./FullCertificateModal";

const CertificateCard = (props:any) => {
    const [opened,{open,close}] = useDisclosure(false);
    return <div className="w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full" data-aos="fade-up" data-aos-duration="800">
        <Card onClick={open}  className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"  shadow="lg" padding="sm" radius="lg" withBorder>
            <Card.Section className="p-3">
                <Image className="!rounded-xl !shadow-[0_0_5px_#64FFDA]" src={props.image} alt={props.image} />
            </Card.Section>
            <Group justify="space-between" mt="xs" mb="xs">
                <Text className="!text-2xl gap-2 !font-bold !text-white flex items-center">
                    {props.title}
                </Text>
            </Group>
            <Group mb="xs">
                <Badge size="lg" variant="light" color="#64FFDA">{props.company}</Badge>
            </Group>
        </Card>
        <FullCertificateModal opened={opened} close={close} title={props.title} company={props.company} image={props.image} />
    </div>
}

export default CertificateCard;