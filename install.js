module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/runew0lf/RuinedFooocus.git app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "",
        ]
      }
    },
    {
      "method": "fs.link",
      "params": {
        "drive": {
          "checkpoints": "app/models/checkpoints",
          "clip": "app/models/clip",
          "clip_vision": "app/models/clip_vision",
          "configs": "app/models/configs",
          "controlnet": "app/models/controlnet",
          "embeddings": "app/models/embeddings",
          "loras": "app/models/loras",
          "upscale_models": "app/models/upscale_models",
          "vae": "app/models/vae",
          "vae_approx": "app/models/VAE-approx",
          "diffusers": "app/models/diffusers",
          "unet": "app/models/unet",
          "vae_approx": "app/models/vae_approx",
          "hypernetworks": "app/models/hypernetworks",
          "gligen": "app/models/gligen",
          "style_models": "app/models/style_models",
          "photomaker": "app/models/photomaker"
        },
        "peers": [
          "https://github.com/cocktailpeanutlabs/automatic1111.git",
          "https://github.com/cocktailpeanutlabs/fooocus.git",
          "https://github.com/cocktailpeanutlabs/comfyui.git",
          "https://github.com/pinokiofactory/stable-diffusion-webui-forge.git",
          "https://github.com/SUP3RMASS1VE/RuinedFooocus.git"
        ]
      }
    },
    {
      "method": "fs.link",
      "params": {
        "drive": {
          "output": "app/output"
        }
      }
    },
    {
      method: "shell.run",
      params: {
        message: "{{'launch.py'}}",
        env: {
          SD_WEBUI_RESTARTING: 1,
        },
        path: "app",
        on: [{ "event": "/http:\/\/[0-9.:]+/", "kill": true }]
      }
    }
  ]
}

