export const mapPermissionsJson = {
  "/auth/user/(.*)": {
    "subject": "user",
    "(.*)": {
      "action": "modifier"
    },
    "GET": {
      "action": "viewer"
    }
  },
  "/x509/v1/ca/(.*)": {
    "subject": "ca",
    "(.*)": {
      "action": "modifier"
    },
    "GET": {
      "action": "viewer"
    }
  },
  "/x509/v1/certificates/(.*)": {
    "subject": "ca-sign",
    "(.*)": {
      "action": "modifier"
    },
    "GET": {
      "action": "viewer"
    }
  },
  "/device/(.*)": {
    "subject": "device",
    "(.*)": {
      "action": "modifier"
    },
    "GET": {
      "action": "viewer"
    }
  },
  "/export/(.*)": {
    "subject": "export",
    "GET": {
      "action": "viewer"
    }
  },
  "/flows/(.*)": {
    "subject": "flows",
    "(.*)": {
      "action": "modifier"
    },
    "GET": {
      "action": "viewer"
    }
  },
  "/history/(.*)": {
    "subject": "history",
    "GET": {
      "action": "viewer"
    }
  },
  "/import/(.*)": {
    "subject": "import",
    "POST": {
      "action": "modifier"
    }
  },
  "/auth/pap/(.*)": {
    "subject": "permission",
    "(.*)": {
      "action": "modifier"
    },
    "GET": {
      "action": "viewer"
    }
  },
  "/stream/socketio/": {
    "subject": "socketio",
    "GET": {
      "action": "viewer"
    }
  },
  "/template/(.*)": {
    "subject": "template",
    "(.*)": {
      "action": "modifier"
    },
    "GET": {
      "action": "viewer"
    }
  },
  "/fw-image/(.*)": {
    "subject": "fw-image",
    "(.*)": {
      "action": "modifier"
    },
    "GET": {
      "action": "viewer"
    }
  },
  "/graphql/(.*)": {
    "subject": "backstage-graphql",
    "(.*)": {
      "action": "modifier"
    }
  }
}
