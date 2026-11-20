export interface LabVideoItem {
  id: string;
  label: string;
  caption: string;
  observedDetail: string;
  duration: string;
  mutedSrc: string;
  originalSrc: string;
  thumbnailSrc: string;
  orientation: 'portrait' | 'landscape';
}

export interface LabPhotoItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  aspect: string;
}

export const PORTFOLIO_PROFILE = {
  studentName: 'Radhika Aggarwal',
  degree: 'First-Year B.Tech CSE Core',
  course: 'Engineering Exploration Laboratory',
  greetingHeadline: "Hi, I'm RADHIKA AGGARWAL",
  greetingSubline: 'a First-year B. TECH CSE CORE student.',
  introStatement:
    'I am making this portfolio to give a tour of the knowledge which I got during my Engineering Exploration Lab experiments and at the end all this got concluded by making a Arduino-UNO based working model project.',
  cohortPhoto: '/assets/aistudio/EE_grp__e460779e.jpeg',
};

export const LAB_SECTION_INTRO =
  'Throughout my Engineering Exploration course, I participated in hands-on laboratory activities involving Arduino programming, electronic components, circuit connections and hardware demonstrations. These activities helped me understand how programming instructions translate into real-world electronic outputs.';

export const EXPERIMENT_01_DATA = {
  number: 'Experiment 01',
  title: 'Arduino-Based LED Interfacing and Blinking Patterns',
  category: 'Arduino · Basic Electronics · Programming',
  objective:
    'To understand how multiple LEDs can be connected to an Arduino UNO and controlled through programmed digital output signals.',
  components: [
    'Arduino UNO microcontroller board',
    'Four LEDs (Green, Yellow, and Red)',
    'Solderless breadboard',
    'Jumper wires (connecting wires)',
    'USB cable for programming and power',
  ],
  workingPrinciple: [
    'The LEDs are connected to the digital output pins of the Arduino UNO.',
    'The Arduino executes the uploaded program and controls the LEDs by switching their outputs ON (HIGH) and OFF (LOW).',
    'Different lighting patterns are created through programming logic and timing delays.',
  ],
  patternsDemonstrated: [
    {
      name: 'Sequential LED Blinking',
      description: 'LEDs illuminate one after another in programmed pin order.',
    },
    {
      name: 'Alternating LED Blinking',
      description: 'Different LED pairs illuminate alternately across timed cycles.',
    },
    {
      name: 'Multiple LED Combinations',
      description: 'Different combinations of LEDs are controlled through programmed instructions.',
    },
    {
      name: 'Timing-Based LED Control',
      description: 'Delay intervals control how long the LEDs remain ON or OFF.',
    },
  ],
  verifiedCodeNote:
    'One of the recorded code demonstrations (sketch_sep17a.ino) configures four digital output pins (8, 9, 10, and 11) via an array with loop-based switching and a 500-millisecond delay, while another recorded run tests a faster 250-millisecond delay interval.',
  learningOutcomes: [
    'How to connect and interface LEDs with an Arduino UNO.',
    'How digital output pins control electronic components.',
    'How programming logic creates different LED patterns and output sequences.',
    'How timing and delay functions influence LED behavior.',
    'How to assemble and test a basic electronic circuit on a breadboard.',
  ],
  keyTakeaway:
    'This activity strengthened my understanding of Arduino-based hardware interfacing and demonstrated how basic programming concepts can be applied to control physical electronic components.',
};

export const LED_DEMONSTRATIONS: LabVideoItem[] = [
  {
    id: 'demo-01',
    label: 'Demonstration 01',
    caption:
      'Sequential four-LED blinking on the breadboard paired with Arduino IDE sketch_sep17a.ino using pins 8, 9, 10, 11 and delay(500).',
    observedDetail: 'Pins 8–11 · 500 ms interval · Sequential ON/OFF loop visible on screen',
    duration: '0:10',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.06_AM_582c2920_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.06_AM_582c2920.mp4',
    thumbnailSrc: '/assets/thumbnails/demo01.jpg',
    orientation: 'portrait',
  },
  {
    id: 'demo-02',
    label: 'Demonstration 02',
    caption:
      'Breadboard LED illumination sequence demonstrating alternating output states and uploaded UNO loop control in the lab.',
    observedDetail: 'Pins 8–11 · Dual-loop digitalWrite execution · Hardware verification',
    duration: '0:13',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.35_AM_b6932545_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.35_AM_b6932545.mp4',
    thumbnailSrc: '/assets/thumbnails/demo02.jpg',
    orientation: 'portrait',
  },
  {
    id: 'demo-03',
    label: 'Demonstration 03',
    caption:
      'Timing-based LED blinking test recorded alongside the Arduino IDE showing a 250-millisecond delay cycle across pins 8–11.',
    observedDetail: 'Pins 8–11 · 250 ms delay cycle · Rapid LED pattern switching',
    duration: '0:15',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.36_AM_8897ca0e_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.36_AM_8897ca0e.mp4',
    thumbnailSrc: '/assets/thumbnails/demo03.jpg',
    orientation: 'portrait',
  },
  {
    id: 'demo-04',
    label: 'Demonstration 04',
    caption:
      'Bench hardware-to-IDE check capturing the USB-powered Arduino UNO breadboard connection and uploaded LED timing code.',
    observedDetail: 'Arduino UNO · Breadboard jumper wiring · Uploaded sketch check',
    duration: '0:02',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.37_AM_93735175_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.37_AM_93735175.mp4',
    thumbnailSrc: '/assets/thumbnails/demo04.jpg',
    orientation: 'portrait',
  },
  {
    id: 'demo-05',
    label: 'Demonstration 05',
    caption:
      'Multi-LED pattern demonstration verifying digital pin wiring and live program response across all four breadboard LEDs.',
    observedDetail: '4 Breadboard LEDs · Digital pin sequencing · Live bench output',
    duration: '0:06',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.40_AM_20d7e5f5_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.40_AM_20d7e5f5.mp4',
    thumbnailSrc: '/assets/thumbnails/demo05.jpg',
    orientation: 'portrait',
  },
  {
    id: 'demo-06',
    label: 'Demonstration 06',
    caption:
      'Rotary potentiometer wired directly to the Arduino UNO controlling a red LED brightness level in real time.',
    observedDetail: 'Potentiometer + Red LED · Arduino UNO · Analog-to-PWM control',
    duration: '0:05',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_4.55.01_PM_79aa0588_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_4.55.01_PM_79aa0588.mp4',
    thumbnailSrc: '/assets/thumbnails/demo06.jpg',
    orientation: 'portrait',
  },
  {
    id: 'demo-07',
    label: 'Demonstration 07',
    caption:
      'Arduino IDE sketch_oct9a.ino calculating ultrasonic distance and toggling the LED pin when readings cross the threshold on COM6.',
    observedDetail: 'sketch_oct9a.ino · Distance & threshold LED control · Serial Monitor',
    duration: '0:06',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_4.57.53_PM_07feace8_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_4.57.53_PM_07feace8.mp4',
    thumbnailSrc: '/assets/thumbnails/demo07.jpg',
    orientation: 'landscape',
  },
];

export const POTENTIOMETER_SKETCH = `// Read analog value from a potentiometer on pin A2
// and display readings continuously on the Serial Monitor

const int potPin = A2;   // Potentiometer wiper connected to analog pin A2
int potValue = 0;        // Variable to store 10-bit ADC reading (0 - 1023)

void setup() {
  Serial.begin(9600);    // Initialize serial communication at 9600 bps
}

void loop() {
  potValue = analogRead(potPin);   // Read analog voltage (0 - 1023)
  Serial.print("Potentiometer Value (A2): ");
  Serial.println(potValue);        // Print reading continuously
  delay(200);                      // Short sampling interval for readability
}`;

export const POTENTIOMETER_DEMOS: LabVideoItem[] = [
  {
    id: 'pot-01',
    label: 'Potentiometer Run 01',
    caption:
      'Arduino sketch reading analog pin A2 and printing continuous Serial Monitor values on COM8.',
    observedDetail: 'Pin A2 · Serial Monitor COM8 · 9600 baud telemetry',
    duration: '0:10',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.43_AM_46d5f0fc_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.43_AM_46d5f0fc.mp4',
    thumbnailSrc: '/assets/thumbnails/pot_a2_1.jpg',
    orientation: 'portrait',
  },
  {
    id: 'pot-02',
    label: 'Potentiometer Run 02',
    caption:
      'Rotating the rotary potentiometer wired to 5V, GND, and A2 while observing live Serial Monitor changes.',
    observedDetail: 'Rotary Potentiometer · Live analogRead(A2) sweep',
    duration: '0:06',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.44_AM_ad475f73_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.44_AM_ad475f73.mp4',
    thumbnailSrc: '/assets/thumbnails/pot_a2_2.jpg',
    orientation: 'portrait',
  },
];

export const POTENTIOMETER_WIRING_PHOTO =
  '/assets/aistudio/WhatsApp_Image_2026-11-20_at_10.18.44_AM_7bd867c0.jpeg';

export const WORKING_MODEL_VIDEO: LabVideoItem = {
  id: 'radar-model',
  label: 'Working Model Demo',
  caption:
    'Live sweep of the Arduino UNO Ultrasonic Radar model combining an HC-SR04 sensor, SG90 micro servo, and Processing radar visualizer.',
  observedDetail: 'HC-SR04 + SG90 Servo · Arduino UNO · Live Radar Sweep UI',
  duration: '0:07',
  mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.41_AM_9b438f8e_muted.mp4',
  originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.41_AM_9b438f8e.mp4',
  thumbnailSrc: '/assets/thumbnails/radar_project.jpg',
  orientation: 'portrait',
};

export const WORKING_MODEL_PHOTOS: LabPhotoItem[] = [
  {
    id: 'radar-team',
    title: 'Project Presentation',
    caption: 'Demonstrating the completed Arduino UNO ultrasonic radar working model with live laptop radar visualization.',
    src: '/assets/thumbnails/radar_team_upright.jpg',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'radar-hardware',
    title: 'Hardware Assembly',
    caption: 'HC-SR04 ultrasonic transceiver mounted on an SG90 servo motor wired to the Arduino UNO.',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_10.18.41_AM_2d203401.jpeg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'radar-ui',
    title: 'Radar Angle & Distance Output',
    caption: 'Real-time polar radar sweep plotting obstacle angle (36°) and distance across concentric 10–40 cm rings.',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-20_at_10.18.42_AM_6bec80e5.jpeg',
    aspect: 'aspect-[4/3]',
  },
];

export const ADDITIONAL_LAB_MODULES = {
  calculatorVideo: {
    id: 'calc-app',
    label: 'MIT App Inventor Calculator',
    caption:
      'Block-based mobile calculator application designed in MIT App Inventor and tested live on an Android smartphone.',
    observedDetail: 'MIT App Inventor · Event-driven arithmetic blocks · Mobile APK test',
    duration: '0:15',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.38_AM_32b16cdb_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.38_AM_32b16cdb.mp4',
    thumbnailSrc: '/assets/thumbnails/calc_app.jpg',
    orientation: 'portrait' as const,
  },
  calculatorBlocksPhoto:
    '/assets/aistudio/WhatsApp_Image_2026-11-20_at_10.18.43_AM_fd6c41c1.jpeg',
  bluetoothVideo: {
    id: 'bt-led',
    label: 'Smartphone-Controlled Arduino LED',
    caption:
      'Wireless Bluetooth module interfaced with Arduino UNO allowing ON/OFF hardware toggling from a mobile interface.',
    observedDetail: 'HC-05 / Bluetooth · Mobile control app · Arduino UNO actuation',
    duration: '0:05',
    mutedSrc: '/assets/muted/WhatsApp_Video_2026-11-20_at_10.18.39_AM_171aa868_muted.mp4',
    originalSrc: '/assets/aistudio/WhatsApp_Video_2026-11-20_at_10.18.39_AM_171aa868.mp4',
    thumbnailSrc: '/assets/thumbnails/bt_led.jpg',
    orientation: 'portrait' as const,
  },
};
