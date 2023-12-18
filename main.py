def on_received_string(receivedString):
    if receivedString == "NORTE":
        SuperBit.servo(SuperBit.enServo.S1, 180)
        SuperBit.servo(SuperBit.enServo.S2, 180)
        SuperBit.servo(SuperBit.enServo.S3, 45)
        SuperBit.servo(SuperBit.enServo.S4, 45)
    elif receivedString == "SUL":
        SuperBit.servo(SuperBit.enServo.S1, 45)
        SuperBit.servo(SuperBit.enServo.S2, 45)
        SuperBit.servo(SuperBit.enServo.S3, 180)
        SuperBit.servo(SuperBit.enServo.S4, 180)
    elif receivedString == "LESTE":
        SuperBit.servo(SuperBit.enServo.S1, 180)
        SuperBit.servo(SuperBit.enServo.S2, 45)
        SuperBit.servo(SuperBit.enServo.S3, 45)
        SuperBit.servo(SuperBit.enServo.S4, 180)
    elif receivedString == "OESTE":
        SuperBit.servo(SuperBit.enServo.S1, 45)
        SuperBit.servo(SuperBit.enServo.S2, 180)
        SuperBit.servo(SuperBit.enServo.S3, 180)
        SuperBit.servo(SuperBit.enServo.S4, 45)
    elif receivedString == "NORDESTE":
        SuperBit.servo(SuperBit.enServo.S1, 180)
        SuperBit.servo(SuperBit.enServo.S2, 112)
        SuperBit.servo(SuperBit.enServo.S3, 45)
        SuperBit.servo(SuperBit.enServo.S4, 112)
    elif receivedString == "SUDOESTE":
        SuperBit.servo(SuperBit.enServo.S1, 45)
        SuperBit.servo(SuperBit.enServo.S2, 112)
        SuperBit.servo(SuperBit.enServo.S3, 180)
        SuperBit.servo(SuperBit.enServo.S4, 112)
    elif receivedString == "NOROESTE":
        SuperBit.servo(SuperBit.enServo.S1, 112)
        SuperBit.servo(SuperBit.enServo.S2, 180)
        SuperBit.servo(SuperBit.enServo.S3, 112)
        SuperBit.servo(SuperBit.enServo.S4, 45)
    elif receivedString == "SUDESTE":
        SuperBit.servo(SuperBit.enServo.S1, 112)
        SuperBit.servo(SuperBit.enServo.S2, 45)
        SuperBit.servo(SuperBit.enServo.S3, 112)
        SuperBit.servo(SuperBit.enServo.S4, 180)
    elif receivedString == "HORARIO":
        SuperBit.servo(SuperBit.enServo.S1, 180)
        SuperBit.servo(SuperBit.enServo.S2, 180)
        SuperBit.servo(SuperBit.enServo.S3, 180)
        SuperBit.servo(SuperBit.enServo.S4, 180)
    elif receivedString == "ANTIHORARIO":
        SuperBit.servo(SuperBit.enServo.S1, 45)
        SuperBit.servo(SuperBit.enServo.S2, 45)
        SuperBit.servo(SuperBit.enServo.S3, 45)
        SuperBit.servo(SuperBit.enServo.S4, 45)
    else:
        SuperBit.servo(SuperBit.enServo.S1, 112)
        SuperBit.servo(SuperBit.enServo.S2, 112)
        SuperBit.servo(SuperBit.enServo.S3, 112)
        SuperBit.servo(SuperBit.enServo.S4, 112)
radio.on_received_string(on_received_string)

radio.set_group(0)