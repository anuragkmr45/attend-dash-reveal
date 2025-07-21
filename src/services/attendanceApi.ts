// API base URL - replace with your actual API endpoint
const API_BASE_URL = 'https://your-api-domain.com/api';

export interface AttendanceLog {
  emp_name: string;
  first_time_in: string;
  last_time_out: string;
  total_breaks: number;
  presence_duration: string;
}

export interface AttendanceLogsResponse {
  date: string;
  logs: AttendanceLog[];
}

export interface OnTimeEmployee {
  emp_name: string;
  first_in: string;
}

export interface OnTimeResponse {
  on_time_employees: OnTimeEmployee[];
}

export interface TotalEmployeesResponse {
  total_employees: number;
}

export interface TotalBreaksResponse {
  employee: string;
  total_breaks: number;
}

export interface CameraStatus {
  stream_id: string;
  status: string;
}

export interface CameraStatusAllResponse {
  cameras: CameraStatus[];
}

export const attendanceApi = {
  // Get attendance logs for a specific date
  getLogs: async (date?: string): Promise<AttendanceLogsResponse> => {
    const url = new URL(`${API_BASE_URL}/attendance/logs`);
    if (date) {
      url.searchParams.append('date', date);
    }
    
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch attendance logs: ${response.statusText}`);
    }
    return response.json();
  },

  // Get total employees count for today
  getTotalToday: async (): Promise<TotalEmployeesResponse> => {
    const response = await fetch(`${API_BASE_URL}/attendance/today-total`);
    if (!response.ok) {
      throw new Error(`Failed to fetch total employees: ${response.statusText}`);
    }
    return response.json();
  },

  // Get on-time employees
  getOnTime: async (): Promise<OnTimeResponse> => {
    const response = await fetch(`${API_BASE_URL}/attendance/on-time`);
    if (!response.ok) {
      throw new Error(`Failed to fetch on-time employees: ${response.statusText}`);
    }
    return response.json();
  },

  // Get total breaks for an employee
  getTotalBreaks: async (empName: string): Promise<TotalBreaksResponse> => {
    const response = await fetch(`${API_BASE_URL}/attendance/total-breaks/${encodeURIComponent(empName)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch total breaks: ${response.statusText}`);
    }
    return response.json();
  },

  // Get camera status by stream ID
  getCameraStatus: async (streamId: string): Promise<CameraStatus> => {
    const response = await fetch(`${API_BASE_URL}/camera/status/${encodeURIComponent(streamId)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch camera status: ${response.statusText}`);
    }
    return response.json();
  },

  // Get all camera statuses
  getAllCameraStatus: async (): Promise<CameraStatusAllResponse> => {
    const response = await fetch(`${API_BASE_URL}/camera/status-all`);
    if (!response.ok) {
      throw new Error(`Failed to fetch all camera statuses: ${response.statusText}`);
    }
    return response.json();
  },
};