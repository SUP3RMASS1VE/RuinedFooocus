module.exports = {
  run: [
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "pip install torch==2.2.2 torchvision==0.17.2 {{args && args.xformers ? 'xformers' : ''}} --index-url https://download.pytorch.org/whl/cu121"
      }
    },
    // windows amd
    {
      "when": "{{platform === 'win32' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "pip install torch-directml torchvision numpy==1.26.4"
      }
    },
    // windows cpu
    {
      "when": "{{platform === 'win32' && (gpu !== 'nvidia' && gpu !== 'amd')}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "pip install torch==2.2.2 torchvision==0.17.2 --index-url https://download.pytorch.org/whl/cpu"
      }
    },
    // mac
    {
      "when": "{{platform === 'darwin'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "pip install torch==2.2.2 torchvision==0.17.2"
      }
    },
    // linux nvidia
    {
      "when": "{{platform === 'linux' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "pip install torch==2.2.2 torchvision==0.17.2 {{args && args.xformers ? 'xformers' : ''}} --index-url https://download.pytorch.org/whl/cu121"
      }
    },
    // linux rocm (amd)
    {
      "when": "{{platform === 'linux' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "pip install torch==2.2.2 torchvision==0.17.2 --index-url https://download.pytorch.org/whl/rocm5.7"
      }
    },
    // linux cpu
    {
      "when": "{{platform === 'linux' && (gpu !== 'amd' && gpu !=='amd')}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": "pip install torch==2.2.2 torchvision==0.17.2 --index-url https://download.pytorch.org/whl/cpu"
      }
    }
  ]
}
