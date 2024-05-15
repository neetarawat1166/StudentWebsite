import React from 'react'
import Syllabus from '../../components/common/Syllabus';


const EmbeddedSystemSyllabus = () => {

  // Define topics here
  const topics = [
    {
      heading: "Introduction",
      subtopics: [
        "IoT	Definition	&	Emergence",
        "Real	World	applications of	IoT",
        "Architecture; Technology	Stack;",
        "Hardware	and	Software Platforms;",
        "Role	of Embedded Systems	in IoT",
        "Features	of AVR Mega328/2560	based	Arduino",
        "Description of Complete	Hardware Structure	&	Pin-out",
        "Introduction	with	Embedded	C++",
        "Programming an	Arduino	Board"
      ]
    },
    {
      heading: "GPIO",
      subtopics: [
        "Configuring I/O and controlling	I/O",
        "Setting mode of pin as input	and	output",
        "Driving pin high and low",
        "LED Interfacing"
      ]
    },
    {
      heading: "GPIO – Display (7 Segment)",
      subtopics: [
        "Need, Types & Working	Concept",
        "Interfacing of	SSD	with Microcontroller",
        "Multiplexing	for	Multiple Digits"
      ]
    },
    {
      heading: "GPIO",
      subtopics: [
        "Working of	Relay	&	Buzzer"
      ]
    },
    {
      heading: "Liquid Crystal Display",
      subtopics: [
        "Introduction	to 16×2	LCD",
        "LCD programming	with Arduino",
        "Writing order change"
      ]
    },
    {
      heading: "Liquid Crystal Display",
      subtopics: [
        "Custom	character	on LCD"
      ]
    },
    {
      heading: "Keys/Switches",
      subtopics: [
        "Concept of	Pullup and Pulldown",
        "The types of	switches"
      ]
    },
    {
      heading: "Keypad Matrix",
      subtopics: [
        "Working of	Keypad Matrix"
      ]
    },
    {
      heading: "PWM/Timer",
      subtopics: [
        "PWM in	Arduino",
        "Timer	Configuration	for	Tone Generation",
        "Counter Usage for Time	Calculation"
      ]
    },
    {
      heading: "Motors",
      subtopics: [
        "DC	Motor: Working, Motor Driver	Circuit; H-Bridge	Concept",
        "Servo Motor: Servo	Mechanism, Working"
      ]
    },
    {
      heading: "Bluetooth: Serial	Communication",
      subtopics: [
        "Serial	Communication	with	Arduino",
        "Bluetooth: Protocol,	Working, Interfacing"
      ]
    },
    {
      heading: "Sensors	– Part 1",
      subtopics: [
        "Using	inbuilt	ADC	of	Arduino",
        "Voltage	Comparator	IC	for	Digital	Mode",
        "IR	Sensor – Concept,	Working	Circuit,	Interfacing",
        "Line	of	Sight	Phenomenon",
        "IR	Range,	IR	Sensor	Circuit",
        "Voltage	Comparator	IC	for	Digital	Mode"
      ]
    },
    {
      heading: "Sensors	– Part 2",
      subtopics: [
        "LDR Sensors: Definition, Phenomenon",
        "Practical 22:	Taking Analog	Light	Intensity	Values",
        "Temperature Sensor: Construction, Concept,	Scaling	Factor"
      ]
    },
    {
      heading: "Sensors	– Part 3",
      subtopics: [
        "SOUND SENSOR: Concept	of Sound	Detection, Working	Circuitry",
        "PIR	SENSOR: Concept	of Pyro-Electricity, Calibration",
        "Moisture	Sensor: Construction,	Concept, Working	Circuit",
        "Gas	Sensor: LPG/Smoke	Detector,	Construction,	Concept, Pin-out"
      ]
    },
    {
      heading: "Sensors	– Part 4",
      subtopics: [
        "Ultrasonic	Sensor:	Concept	of	Ultrasonic	Waves",
        "Working	of	HC-SR04"
      ]
    },
    {
      heading: "Interrupts",
      subtopics: [
        "Definition, Significance, Advantages",
        "Various Interrupts (Hardware, Software)",
        "Interrupt Service Routines"
      ]
    },
    {
      heading: "Robotics",
      subtopics: [
        "Dynamics	of Robotics",
        "Sensor	Bots"
      ]
    },
    {
      heading: "PCB	Designing &	Fabrication",
      subtopics: [
        "Tools, Rules for PCB Designing",
        "Tracing	&	Fabrication"
      ]
    },
    {
      heading: "RFID",
      subtopics: [
        "RFID: Technology,	Concept, Circuit",
        "Interfacing of RFID Reader with AVR"
      ]
    },
    {
      heading: "GSM",
      subtopics: [
        "Introduction	to mobile communication",
        "Introduction	to	GSM	terminology",
        "GSM Frequency	bands, SIM",
        "GSM AT	Commands"
      ]
    },
    {
      heading: "GPS",
      subtopics: [
        "Introduction	to	GPS",
        "Satellites	and	its	Orbits",
        "Range,	Accuracy	and	Tracking"
      ]
    },
    {
      heading: "Wi-Fi",
      subtopics: [
        "ESP8266:	Pinout., configuration,	working, interfacing",
        "ESP AT Commands"
      ]
    },
    {
      heading: "IoT	Platform",
      subtopics: [
        "Basic Concepts of Networking (Types,	Topologies,	IP,	HTTP,	URL)",
        "Various Data	Handling Requests in	HTTP",
        "What	is IoT Platform?",
        "What	is API?"
      ]
    },
    {
      heading: "MQTT - IoT Platform",
      subtopics: [
        "Understanding	Message	Queueing	Telemetry	for	IoT",
        "The	concept	of	Subscribers	and	Publishers",
        "Setting	up	MQTT	on	Python"
      ]
    },
    {
      heading: "MQTT - IoT Platform",
      subtopics: [
        "Adafruit	IoT	Platform for MQTT",
        "IFTTT Platform for Google-Assistant	and	other	Controls"
      ]
    }
  ];

  return (
    <>
      <Syllabus topics={topics} courseHeading="Embedded Systems & Robotics with IoT Course" />
    </>
  );
};

export default EmbeddedSystemSyllabus