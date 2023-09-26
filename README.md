# VindicaStoreHosting
# Growtopia Check Gems API

## '/create_table', methods=['POST']
{
  "server_name": "example_server_name"
}


## '/get_gems/<string:server_name>', methods=['GET']
{
  "servername": "example_server_name"
}


## '/update_gems', methods=['POST']
{
    "servername": "Can_1_100",
    "gems": 50
}

## '/update_bot_status', methods=['POST']
{
  "server_name": "example_server_name",
  "bot_name": "example_bot_name",
  "status": "online",
  "gems": 50
}

## '/remove_bot', methods=['DELETE']
{
  "server_name": "example_server_name",
  "bot_name": "example_bot_name"
}
