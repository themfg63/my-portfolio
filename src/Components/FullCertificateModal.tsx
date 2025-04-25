import { Image, Modal, ScrollArea} from "@mantine/core"

const FullCertificateModal = (props:any) => {
    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="70%" className="font-mono" opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className="!rounded-3xl">
            <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl">
                <Modal.Title className="!text-4xl text-white flex gap-3 items-center !font-bold">
                    {props.title} - {props.company}
                </Modal.Title>
                <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
            </Modal.Header>
            <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
                <Image className="!rounded-xl !shadow-[0_0_5xp_0_#64FFDA]" src={props.image} alt={props.image} />
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
}

export default FullCertificateModal;