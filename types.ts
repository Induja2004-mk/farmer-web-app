export interface DiseaseData {
  name: string;
  cases: number;
  severity: 'Mild' | 'Moderate' | 'Severe';
  date: string;
}

export interface WeatherData {
  date: string;
  temperature: number;
  humidity: number;
  rainfall: number;
}

export interface CropHealth {
  id: string;
  name: string;
  status: 'Healthy' | 'At Risk' | 'Infected';
  lastInspection: string;
  diseaseHistory: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface SensorData {
  temperature: number;
  humidity: number;
  soilMoisture: number;
  timestamp: string;
}

export interface DiseaseDetection {
  disease: string;
  confidence: number;
  treatment: string;
  naturalRemedies: string[];
  preventiveMeasures: string[];
}