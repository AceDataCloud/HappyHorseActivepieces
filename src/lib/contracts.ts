// Snapshot of Ace Data Cloud's Dify plugin API mapping; source revision is documented in README.md.
export type EndpointSpec = {
  method: string; path: string; operation: string; schema: Record<string, unknown>;
  properties: Record<string, Record<string, unknown>>; parameters?: Array<{ name: string; in: string; required?: boolean; schema?: Record<string, unknown> }>;
  defaults?: Record<string, unknown>; fixed?: Record<string, unknown>; allow_empty?: string[]; query_actions?: string[];
  media_response?: boolean; selector?: Record<string, string>; selector_default?: string; read_only?: boolean;
  asynchronous?: boolean; destructive?: boolean;
};
export const serviceName: string = "HappyHorse";
export const taskPath = "/happyhorse/tasks";
export const endpoints: Record<string, EndpointSpec> = {
  "happyhorse_generate_video": {
    "method": "POST",
    "path": "/happyhorse/videos",
    "operation": "generate",
    "schema": {
      "type": "object",
      "properties": {
        "action": {
          "enum": [
            "generate",
            "image_to_video",
            "reference_to_video",
            "video_edit"
          ],
          "type": "string"
        },
        "model": {
          "enum": [
            "happyhorse-1.0-t2v",
            "happyhorse-1.1-t2v",
            "happyhorse-1.0-i2v",
            "happyhorse-1.1-i2v",
            "happyhorse-1.0-r2v",
            "happyhorse-1.1-r2v",
            "happyhorse-1.0-video-edit"
          ],
          "type": "string"
        },
        "prompt": {
          "type": "string"
        },
        "image_url": {
          "type": "string"
        },
        "image_urls": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "video_url": {
          "type": "string"
        },
        "resolution": {
          "enum": [
            "720P",
            "1080P"
          ],
          "type": "string"
        },
        "ratio": {
          "enum": [
            "16:9",
            "9:16",
            "1:1",
            "4:3",
            "3:4"
          ],
          "type": "string"
        },
        "duration": {
          "type": "integer",
          "minimum": 3,
          "maximum": 15
        },
        "watermark": {
          "type": "boolean"
        },
        "audio_setting": {
          "enum": [
            "auto",
            "origin"
          ],
          "type": "string"
        },
        "seed": {
          "type": "integer",
          "minimum": 0,
          "maximum": 2147483647
        },
        "callback_url": {
          "type": "string"
        },
        "async": {
          "type": "boolean"
        }
      }
    },
    "properties": {
      "action": {
        "enum": [
          "generate",
          "image_to_video",
          "reference_to_video",
          "video_edit"
        ],
        "type": "string"
      },
      "model": {
        "enum": [
          "happyhorse-1.0-t2v",
          "happyhorse-1.1-t2v",
          "happyhorse-1.0-i2v",
          "happyhorse-1.1-i2v",
          "happyhorse-1.0-r2v",
          "happyhorse-1.1-r2v",
          "happyhorse-1.0-video-edit"
        ],
        "type": "string"
      },
      "prompt": {
        "type": "string"
      },
      "image_url": {
        "type": "string"
      },
      "image_urls": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "video_url": {
        "type": "string"
      },
      "resolution": {
        "enum": [
          "720P",
          "1080P"
        ],
        "type": "string"
      },
      "ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string"
      },
      "duration": {
        "type": "integer",
        "minimum": 3,
        "maximum": 15
      },
      "watermark": {
        "type": "boolean"
      },
      "audio_setting": {
        "enum": [
          "auto",
          "origin"
        ],
        "type": "string"
      },
      "seed": {
        "type": "integer",
        "minimum": 0,
        "maximum": 2147483647
      },
      "callback_url": {
        "type": "string"
      },
      "async": {
        "type": "boolean"
      }
    },
    "parameters": [],
    "defaults": {
      "action": "generate",
      "resolution": "720P",
      "duration": 3,
      "ratio": "16:9"
    },
    "fixed": {},
    "allow_empty": [],
    "query_actions": [],
    "media_response": false
  },
  "happyhorse_task_retrieve": {
    "method": "POST",
    "path": "/happyhorse/tasks",
    "operation": "task",
    "schema": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "ids": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "action": {
          "enum": [
            "retrieve",
            "retrieve_batch"
          ],
          "type": "string"
        }
      }
    },
    "properties": {
      "id": {
        "type": "string"
      },
      "ids": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "action": {
        "enum": [
          "retrieve",
          "retrieve_batch"
        ],
        "type": "string"
      }
    },
    "parameters": [],
    "defaults": {
      "wait_seconds": 0
    },
    "fixed": {},
    "allow_empty": [],
    "query_actions": [
      "retrieve",
      "retrieve_batch",
      "list",
      "presets"
    ],
    "media_response": false
  }
};
